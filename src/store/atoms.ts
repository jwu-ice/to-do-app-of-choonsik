import { DefaultValue, atom, selector, selectorFamily } from "recoil"
import { todoJSONType } from "@/components/TodoList"

type LocalStorageKey = "todos"

const localStorageEffect =
  (key: LocalStorageKey) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    } else {
      setSelf([])
    }

    onSet((newValue: any, oldValue: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const atomTodoList = atom<todoJSONType[]>({
  key: "atomTodoList",
  default: [],
  effects: [localStorageEffect("todos")],
})

// export const selectorTodoList = selectorFamily({
//   key: "selectorTodoList",
//   get:
//     (todo: todoJSONType) =>
//     ({ get }) => {
//       const { id } = todo

//       return { todos, index, maxId }
//     },
//   set:
//     () =>
//     ({ set }, newState: any) =>
//       set(atomTodoList, newState),
// })

// Create, Update, Delete, Filter..?
