module.exports = (() => {
  let localStorageKey = "todo-"

  return {
    // TODO_ITEMS_COUNT: 8,
    TODO_IDS_KEY_LOCALSTORAGE: `${localStorageKey}ids`,
    TODO_ITEM_KEY_LOCALSTORAGE: localStorageKey,
    TODO_LOADING_IMAGE: ["bg-choonsik-loading-1", "bg-choonsik-loading-2"],
  }
})()
