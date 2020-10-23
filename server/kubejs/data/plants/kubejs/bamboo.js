
// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for bamboo
     event.shaped(item.of('minecraft:bamboo', 1), [
        'R',
        'R',
        'S'
    ], {
        R: '#forge:rods/wooden',
        S: '#minecraft:saplings'
    })

})