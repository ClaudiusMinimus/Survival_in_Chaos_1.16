// Listen to player login event
events.listen('player.logged_in', function (event) {
    // Check if player doesn't have "starting_items" gamestage yet
    if (!event.hasGameStage('starting_items')) {
      // Add the gamestage
      event.addGameStage('starting_items')
      // Give some items to player
      event.player.give('minecraft:stone_sword')
      event.player.give({ item: 'minecraft:stone_pickaxe', data: 10 })
      event.player.give({ item: 'minecraft:apple', count: 30 })
    }
  })