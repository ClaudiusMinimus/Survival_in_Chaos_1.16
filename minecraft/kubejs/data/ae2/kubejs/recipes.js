// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {
  
  // Add shapeless recipe for conversion AE2 silicon to RS silicon
  event.shapeless(item.of('refinedstorage:silicon'), ['appliedenergistics2:silicon'])

  // Add shapeless recipe for conversion RS silicon to AE2 silicon
  event.shapeless(item.of('appliedenergistics2:silicon'), ['refinedstorage:silicon'])

  // Add shaped recipe for AE2 Logic Calculation Press
  event.shaped(item.of('appliedenergistics2:calculation_processor_press', 1), [
    'III',
    'IQI',
    'III'
  ], {
    Q: '#forge:gems/certus_quartz',
    I: '#forge:ingots/iron'
  })

  // Add shaped recipe for AE2 Logic Processor Press
  event.shaped(item.of('appliedenergistics2:logic_processor_press', 1), [
    'III',
    'IGI',
    'III'
  ], {
    G: '#forge:ingots/gold',
    I: '#forge:ingots/iron'
  })

  // Add shaped recipe for AE2 Engineering Processor Press
  event.shaped(item.of('appliedenergistics2:engineering_processor_press', 1), [
    'III',
    'IDI',
    'III'
  ], {
    D: '#forge:gems/diamond',
    I: '#forge:ingots/iron'
  })

  // Add shaped recipe for AE2 Silicon Press
  event.shaped(item.of('appliedenergistics2:silicon_press', 1), [
    'III',
    'ISI',
    'III'
  ], {
    S: 'appliedenergistics2:silicon',
    I: '#forge:ingots/iron'
  })

    // Add shaped recipe for AE2 Silicon Press using RS silicon
    event.shaped(item.of('appliedenergistics2:silicon_press', 1), [
      'III',
      'ISI',
      'III'
    ], {
      S: 'refinedstorage:silicon',
      I: '#forge:ingots/iron'
    })


  // Add shaped recipe for AE2 Sky Stone
  event.shaped(item.of('appliedenergistics2:sky_stone_block', 1), [
    'O O',
    ' I ',
    'O O'
  ], {
    O: '#forge:obsidian',
    I: '#forge:ingots/iron'
  })

  // Add shaped recipe for AE2 Quartz Glass
  event.shaped(item.of('appliedenergistics2:quartz_glass', 4), [
    'DGD',
    'GDG',
    'DGD'
  ], {
    D: '#forge:dusts/quartz',
    G: '#forge:glass'
  })

  // Add shaped recipe for AE2 Quartz Glass
  event.shaped(item.of('appliedenergistics2:quartz_glass', 4), [
    'DGD',
    'GDG',
    'DGD'
  ], {
    D: '#forge:dusts/certus_quartz',
    G: '#forge:glass'
  })

  // Add shaped recipe for AE2 Quartz Fiber
  event.shaped(item.of('appliedenergistics2:quartz_fiber', 3), [
    'GGG',
    'DDD',
    'GGG'
  ], {
    D: '#forge:dusts/quartz',
    G: '#forge:glass'
  })

  // Add shaped recipe for AE2 Quartz Fiber
  event.shaped(item.of('appliedenergistics2:quartz_fiber', 3), [
    'GGG',
    'DDD',
    'GGG'
  ], {
    D: '#forge:dusts/certus_quartz',
    G: '#forge:glass'
  })
  
  // Add shaped recipe for AE2 Nether Quartz Seed
  event.shaped(item.of('appliedenergistics2:nether_quartz_seed', 2), [
    'SD'
  ], {
    D: '#forge:dusts/quartz',
    S: '#forge:sand'
  })

  // Add shaped recipe for AE2 Certus Quartz Seed
  event.shaped(item.of('appliedenergistics2:certus_crystal_seed', 2), [
    'SD'
  ], {
    D: '#forge:dusts/certus_quartz',
    S: '#forge:sand'
  })

  // Add shaped recipe for AE2 Tiny TNT
  event.shaped(item.of('appliedenergistics2:tiny_tnt', 1), [
    'DG',
    'GD'
  ], {
    D: '#forge:dusts/certus_quartz',
    G: '#forge:gunpowder'
  })
  
  // Add shaped recipe for AE2 Tiny TNT
  event.shaped(item.of('appliedenergistics2:tiny_tnt', 1), [
    'DG',
    'GD'
  ], {
    D: '#forge:dusts/quartz',
    G: '#forge:gunpowder'
  })

})
