// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    //Remove default ATM Mining Dimension Teleporter recipe
    event.remove({id: 'allthemodium:teleport_pad'})
    
    // Add shaped recipe for ATM Mining Dimension Teleporter
     event.shaped(item.of('allthemodium:teleport_pad', 1), [
        'LPL',
        'PAP',
        'LPL'
    ], {
        A: 'minecraft:stone_pickaxe',
        P: '#minecraft:planks',
        L: '#minecraft:logs'
    })

})