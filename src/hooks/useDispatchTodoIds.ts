import { DefaultValue, useRecoilCallback } from "recoil"
import { atomTodoIds } from "@/store/todoIds"
import LocalStore from "@/utils/localStore"

type DispatchTodoIdsType =
  | {
      type: "CREATE"
      newId: number
    }
  | {
      type: "DELETE"
      targetId: number
    }

const reducer = (state: number[], action: DispatchTodoIdsType) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.newId]

    case "DELETE": {
      const targetIndex = state.findIndex((id) => id === action.targetId)
      // TODO localStorage 분리할 순 없을까
      LocalStore.remove(`todo-${action.targetId}`)

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
        set(atomTodoIds, (curr: number[]) =>
          curr instanceof DefaultValue ? curr : reducer(curr, action),
        )
      },
    [],
  )

  return { dispatch }
}
