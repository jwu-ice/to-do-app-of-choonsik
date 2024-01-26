import { DefaultValue, useRecoilCallback } from "recoil"
import { todoJSONType } from "@/components/TodoList"
import { atomFamilyTodo } from "@/store/todo"

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
    [],
  )

  return { dispatch }
}
