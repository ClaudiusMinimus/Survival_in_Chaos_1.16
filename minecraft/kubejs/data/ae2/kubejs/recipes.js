// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {
  
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
