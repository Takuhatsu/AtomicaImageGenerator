module.exports = {
    metadataTemplate: (tokenId, attributes) => ({
        image: '<%IMAGE_URL%>',
        name: `Atomica Boy #${tokenId}`,
        attributes: attributes,
    }),
    assets: [
        {
            name: "Background",
            probability: 1.0,
            options: [
                {
                    name: "Achieve",
                    file: "background/Achieve.png",
                    weight: 1
                },
                {
                    name: "Blue",
                    file: "background/Blue.png",
                    weight: 17
                },
                {
                    name: "Cloudy",
                    file: "background/Cloudy.png",
                    weight: 3
                },
                {
                    name: "Mint",
                    file: "background/Mint.png",
                    weight: 17
                },
                {
                    name: "Ocean",
                    file: "background/Ocean.png",
                    weight: 17
                },
                {
                    name: "Paperflat",
                    file: "background/Paperflat.png",
                    weight: 4
                },
                {
                    name: "Pink",
                    file: "background/Pink.png",
                    weight: 3
                },
                {
                    name: "Polar Lights",
                    file: "background/Polar Lights.png",
                    weight: 3
                },
                {
                    name: "Sand",
                    file: "background/Sand.png",
                    weight: 17
                },
                {
                    name: "Scarlet",
                    file: "background/Scarlet.png",
                    weight: 17
                }
            ]
        },
        {
            name: "Skin",
            probability: 1.0,
            options: [
                {
                    name: "Burned Man",
                    file: "skin/Burned Man.png",
                    weight: 1
                },
                {
                    name: "Crackwack",
                    file: "skin/Crackwack.png",
                    weight: 2
                },
                {
                    name: "Ghost",
                    file: "skin/Ghost.png",
                    weight: 3
                },
                {
                    name: "Leopard",
                    file: "skin/Leopard.png",
                    weight: 2
                },
                {
                    name: "Shadow",
                    file: "skin/Shadow.png",
                    weight: 1
                },
                {
                    name: "Skin 1",
                    file: "skin/Skin 1.png",
                    weight: 10
                },
                {
                    name: "Skin 2",
                    file: "skin/Skin 2.png",
                    weight: 10
                },
                {
                    name: "Skin 3",
                    file: "skin/Skin 3.png",
                    weight: 10
                },
                {
                    name: "Skin 4",
                    file: "skin/Skin 4.png",
                    weight: 10
                },
                {
                    name: "Skin 5",
                    file: "skin/Skin 5.png",
                    weight: 10
                },
                {
                    name: "Skin 6",
                    file: "skin/Skin 6.png",
                    weight: 10
                },
                {
                    name: "Skin 7",
                    file: "skin/Skin 7.png",
                    weight: 10
                },
                {
                    name: "Skin 8",
                    file: "skin/Skin 8.png",
                    weight: 10
                },
                {
                    name: "Skin 9",
                    file: "skin/Skin 9.png",
                    weight: 10
                },
                {
                    name: "Skin 10",
                    file: "skin/Skin 10.png",
                    weight: 10
                }
            ]
        }
    ]
}