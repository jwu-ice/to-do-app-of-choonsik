const TODO_KEY_LOCALSTORAGE = "todo"
export const LANGUAGE_KEY_STORE = "language"
export const BG_COLOR_KEY_STORE = "bg-color"

// TODO_ITEMS_COUNT: 8,
export const TODO_ITEM_KEY_LOCALSTORAGE = TODO_KEY_LOCALSTORAGE
export const TODO_IDS_KEY_LOCALSTORAGE = `${TODO_KEY_LOCALSTORAGE}-ids`
export const TODO_LOADING_IMAGE = [
  "bg-choonsik-loading-1",
  "bg-choonsik-loading-2",
]

export const DEFAULT_BGCOLOR = "#52d3ff"
export const DEFAULT_LANGUAGE = "ko"

export const SelectLanguageOptions = [
  { value: "ko", name: "한국어" },
  { value: "en", name: "English" },
] as const

// Supported Languages
export type TypeLang = keyof typeof TEXT_LOCAL
export type TypeText = keyof typeof TEXT_LOCAL[TypeLang]

export const TEXT_LOCAL = {
  ko: {
    todoItem_placeholder: "할 일을 입력하라구",
    confirm_delete: "정말 지우겠습니까?",
    option_preference: "환경 설정",
    option_do_delete_all: "할 일 리스트 전부 삭제",
    option_change_background_color: "배경화면 색 변경",
    option_change_language: "언어 변경",
  },
  en: {
    todoItem_placeholder: "Enter a to do ",
    confirm_delete: "Are you really delete everything?",
    option_preference: "Preferences",
    option_do_delete_all: "Delete all to do list",
    option_change_background_color: "Change background color",
    option_change_language: "Change language",
  },
} as const
