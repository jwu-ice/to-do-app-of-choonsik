import { atom, selector, useRecoilState } from "recoil"
import LocalStore from "@/utils/localStore"

export const todoListState = atom({
  key: "TodoListState",
  default: LocalStore.get("todos"),
})

export const todoListChangeState = selector({
  key: "TodoListSelector",
  get: ({ get }) => {
    const todoList = get(todoListState)

    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {}
  },
  set: ({ set }, newValue) => set(todoListState, newValue),
})

const [todo, setTodo] = useRecoilState(todoListChangeState)
console.log("todo, setTodo", todo)
