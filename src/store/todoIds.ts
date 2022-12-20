import { RecoilState, atom, useRecoilCallback } from "recoil"
import { atomFamilyTodo } from "@/store/todo"

export type DispatchTodoIdsType =
  | {
      type: "CREATE"
      newId: number
    }
  | {
      type: "DELETE"
      targetId: number
    }

const reducerTodoIds = (state: number[], action: DispatchTodoIdsType) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.newId]

    case "DELETE": {
      const targetIndex = state.findIndex((id) => id === action.targetId)
      return [...state.slice(0, targetIndex), ...state.slice(targetIndex + 1)]
    }

    default:
      return state
  }
}

export const useDispatchTodoIds = () => {
  const dispatch = useRecoilCallback(
    ({ set }) =>
      (action: DispatchTodoIdsType) => {
        set(atomTodoIds, (curr: number[]) => reducerTodoIds(curr, action))
      },
  )

  return { dispatch }
}

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
