import { DefaultValue, atom, useRecoilCallback } from "recoil"
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
