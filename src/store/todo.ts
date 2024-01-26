import { atomFamily } from "recoil"
import { todoJSONType } from "@/components/TodoList"

const atomFamilyTodoEffect =
  (key: string, id: number) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key + String(id))
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue: any, oldValue: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key + String(id), JSON.stringify(newValue))
    })
  }

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
  effects: (id) => [atomFamilyTodoEffect("todo-", id)],
})
