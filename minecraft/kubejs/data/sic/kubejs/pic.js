// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for clay block
     event.shaped(item.of('minecraft:clay', 8), [
        'SDS',
        'DWD',
        'SDS'
    ], {
        S: 'minecraft:sand',
        D: 'minecraft:dirt',
        W: 'minecraft:water_bucket'
    })

    // Add shapeless recipe for sugarcane
    event.shapeless(item.of('minecraft:sugar_cane', 1), ['minecraft:sugar', 'minecraft:stick'])

})