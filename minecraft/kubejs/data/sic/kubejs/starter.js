// Listen to player login event
events.listen('player.logged_in', function (event) {
    // Check if player doesn't have "starting_items" gamestage yet
    if (!event.hasGameStage('starting_items')) {
      // Add the gamestage
      event.addGameStage('starting_items')
      // Give some items to player
      event.player.give('minecraft:stone_sword')
      event.player.give('minecraft:stone_pickaxe')
      event.player.give('minecraft:stone_axe')
      event.player.give('minecraft:stone_shovel')
      event.player.give('ceramicbucket:ceramic_bucket')
      event.player.give({ item: 'minecraft:torch', count: 16})
      event.player.give('torchmaster:megatorch')
      event.player.give('minecraft:iron_helmet')
      event.player.give('minecraft:iron_chestplate')
      event.player.give('minecraft:iron_leggings')
      event.player.give('minecraft:iron_boots')
      event.player.give({ item: 'pamhc2foodcore:baconcheeseburgeritem', count: 8})
     }
  })