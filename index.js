const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const path = require('path');
const fs = require('fs');
const { MersenneTwister19937, bool, real } = require('random-js');

const assetsPath = path.join(process.cwd(), 'assets')
const outputPath = path.join(process.cwd(), 'output')

async function generateAtomica(num, assetsPath, outputPath) {
    const content = require(assetsPath + "/content")
    let generated = new Set()

    for (let tokenId = 1; tokenId<num; tokenId++) {
        console.log(`Atomica Generating #${tokenId} …`)
        let selection = randomlySelectLayers(assetsPath, content.assets)
        const traitsStr = JSON.stringify(selection.selectedTraits)

        if (generated.has(traitsStr)) {
            console.log("Duplicate detected. Retry …")
            tokenId--
            continue
        } else {
            generated.add(traitsStr)
            await mergeLayersAndSave(
                selection.images, 
                path.join(outputPath, `${tokenId}.png`)
            )
            let metadata = generateMetadata(content, tokenId, selection.selectedTraits)
            fs.writeFileSync(path.join(outputPath, `${tokenId}`), JSON.stringify(metadata))
        }
    }
}

function generateMetadata(content, tokenId, traits) {
    attributes = []
    for (const [trait_type, value] of Object.entries(traits)) {
        attributes.push({trait_type, value})
        if (trait_type === 'background', value === 'Mint') {
            console.log("Mint background detected")
        }
    }

    return content.metadataTemplate(tokenId, attributes)
}

function randomlySelectLayers(assetsPath, layers) {
    const mt = MersenneTwister19937.autoSeed()

    let images = []
    let selectedTraits = {}

    for (const layer of layers) {
        if (bool(layer.probability)(mt)) {
            let selected = pickWeighted(mt, layer.options)
            selectedTraits[layer.name] = selected.name
            images.push(path.join(assetsPath, selected.file))
        }
    }

    return {
        images,
        selectedTraits
    }
}

function pickWeighted(mt, options) {
    const weightSum = options.reduce((acc, option) => {
        return acc + (option.weight ?? 1.0)
    }, 0)

    const r = real(0.0, weightSum, false)(mt)

    let summedWeight = 0.0;
    for (const option of options) {
        summedWeight += option.weight ?? 1.0
        if (r <= summedWeight) {
            return option
        }
    }
}

async function mergeLayersAndSave(assets, outputFile) {
    const image = await mergeImages(assets, { Canvas: Canvas, Image: Image })
    saveBase64Image(image, outputFile)
}

function saveBase64Image(base64PngImage, filename) {
    let base64 = base64PngImage.split(',')[1]
    let imageBuffer = Buffer.from(base64, 'base64')
    fs.writeFileSync(filename, imageBuffer)
}


// If tokenId starts from #1, add + 1 to needed quantaty.
generateAtomica(30, assetsPath, outputPath)