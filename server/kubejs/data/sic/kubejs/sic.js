// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for chests
    event.shaped(item.of('minecraft:chest', 4), [
        'WWW',
        'W W',
        'WWW'
    ], {
        W: '#minecraft:logs'
    })

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

    // Add shaped recipe for dragon breath
    event.shaped(item.of('minecraft:dragon_breath', 2), [
        'BBB',
        'BLB',
        'BBB'
    ], {
        L: 'minecraft:lava_bucket',
        B: 'minecraft:glass_bottle'
    })

    // Add shapeless recipe for sugarcane
    event.shapeless(item.of('minecraft:sugar_cane', 1), ['minecraft:sugar', 'minecraft:stick'])

    // Add shapeless recipe for Survival in Chaos book
    event.shapeless(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:chaos' }), ['minecraft:book', 'minecraft:dirt'])
})