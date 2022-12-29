import {
  DefaultValue,
  atomFamily,
  selectorFamily,
  useRecoilCallback,
} from "recoil"
import { todoJSONType } from "@/components/TodoList"

type DispatchTodoType =
  | {
      type: "EDIT_TEXT"
      text: string
    }
  | {
      type: "CHECK"
    }

const reducer = (state: todoJSONType, action: DispatchTodoType) => {
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
        set(atomFamilyTodo(id), (curr) =>
          curr instanceof DefaultValue ? curr : reducer(curr, action),
        )
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

const selectorFamilyTodo = selectorFamily({
  key: "selectorFamilyTodo",
  get:
    (id: number) =>
    ({ get }) => {
      const todo = get(atomFamilyTodo(id))
      return
    },
})
