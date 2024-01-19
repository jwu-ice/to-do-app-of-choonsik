import { DefaultValue, useRecoilCallback } from "recoil"
import { atomTodoIds } from "@/store/todoIds"
import LocalStore from "@/utils/localStore"
import {
  TODO_IDS_KEY_LOCALSTORAGE,
  TODO_ITEM_KEY_LOCALSTORAGE,
} from "@/constants"

type DispatchTodoIdsType =
  | {
      type: "CREATE"
      newId: number
    }
  | {
      type: "DELETE"
      targetId: number
    }
  | {
      type: "DELETE_ALL"
    }

const reducer = (state: number[], action: DispatchTodoIdsType) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.newId]

    case "DELETE": {
      const targetIndex = state.findIndex((id) => id === action.targetId)
      // TODO localStorage 분리할 순 없을까
      LocalStore.remove(`${TODO_ITEM_KEY_LOCALSTORAGE}-${action.targetId}`)

      return [...state.slice(0, targetIndex), ...state.slice(targetIndex + 1)]
    }

    case "DELETE_ALL": {
      const ids = LocalStore.get(TODO_IDS_KEY_LOCALSTORAGE)
      if (!ids?.length) return state

      ids.forEach((id: string) => {
        LocalStore.remove(`${TODO_ITEM_KEY_LOCALSTORAGE}-${id}`)
      })
      LocalStore.remove(TODO_IDS_KEY_LOCALSTORAGE)
      return []
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
