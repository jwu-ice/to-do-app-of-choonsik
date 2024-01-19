import { atom } from "recoil"

const atomTodoIdsEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: any, oldValue: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const atomTodoIds = atom<number[]>({
  key: "atomTodoIds",
  default: [],
  effects: [atomTodoIdsEffect("todo-ids")],
})
