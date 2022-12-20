import { RecoilState, atomFamily, useRecoilCallback } from "recoil"
import { todoJSONType } from "@/components/TodoList"

export type DispatchTodoType =
  | {
      type: "EDIT_TEXT"
      text: string
    }
  | {
      type: "CHECK"
    }

const reducerTodo = (state: todoJSONType, action: DispatchTodoType) => {
  switch (action.type) {
    case "EDIT_TEXT":
      return { ...state, text: action.text.trim() }

    case "CHECK":
      return { ...state, isCheck: !state.isCheck }

    default:
      return state
  }
}

export const useDispatchTodo = () => {
  const dispatch = useRecoilCallback(
    ({ set }) =>
      (id: number, action: DispatchTodoType) => {
        set(atomFamilyTodo(id), (curr) => reducerTodo(curr, action))
      },
  )

  return { dispatch }
}

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
