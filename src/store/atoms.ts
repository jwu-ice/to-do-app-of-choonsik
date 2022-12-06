import { atom, atomFamily } from "recoil"
import { todoJSONType } from "@/components/TodoList"
import LocalStore from "@/utils/localStore"

type LocalStorageKey = "todos"

// side effect
const localStorageEffect =
  (key: LocalStorageKey) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)

    savedValue != null ? setSelf(JSON.parse(savedValue)) : setSelf([])

    onSet((newValue: any, oldValue: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

// atom
export const atomTodoList = atom<todoJSONType[]>({
  key: "atomTodoList",
  default: [],
  effects: [localStorageEffect("todos")],
})

export const atomFamilyTodo = atomFamily<todoJSONType, number>({
  key: "atomFamilyTodo",
  default: (id) => {
    return {
      id: id,
      text: "",
      isCheck: false,
      date: `${new Date().toLocaleString("ko")}`,
    } as todoJSONType
  },
})

export const atomTodoIds = atom<number[]>({
  key: "atomTodoIds",
  default: [],
})
