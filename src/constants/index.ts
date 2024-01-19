const TODO_KEY_LOCALSTORAGE = "todo-"

// TODO_ITEMS_COUNT: 8,
export const TODO_ITEM_KEY_LOCALSTORAGE = TODO_KEY_LOCALSTORAGE
export const TODO_IDS_KEY_LOCALSTORAGE = `${TODO_KEY_LOCALSTORAGE}ids`
export const TODO_LOADING_IMAGE = [
  "bg-choonsik-loading-1",
  "bg-choonsik-loading-2",
]

export const OPTION_TITLE = {
  ko: "환경 설정",
  en: "Preferences",
}

export const OPTION_LIST = {
  DO_DELETE_ALL: {
    ko: "할 일 리스트 전부 삭제",
    en: "Delete all to do list",
  },
  CHANGE_BACKGROUND_COLOR: {
    ko: "배경색상 변경",
    en: "Change background color",
  },
  CHANGE_LANGUAGE: {
    ko: "언어 변경",
    en: "Change language",
  },
} as const

// @type 모음
// TODO 디렉토리 구분하기 const, type
export type OPTION_LIST_TYPE = keyof typeof OPTION_LIST
export type LANGUAGE_TYPE = keyof typeof OPTION_LIST[OPTION_LIST_TYPE]

// Object.entries parameter type
export type EntriesType<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]