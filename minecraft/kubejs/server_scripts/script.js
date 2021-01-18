// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here
  event.remove({ mod: 'silentgear', type: 'bluepower:alloy_smelting' })
})

events.listen('item.tags', event => {
  // Change item tags here
})