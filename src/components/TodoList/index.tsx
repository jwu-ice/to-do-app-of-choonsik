import { useRecoilValue } from "recoil"
import { ReactNode, useEffect, useId, useRef } from "react"
import Loading from "../Loading/index"
import TodoItem from "@/components/TodoItem"
import { atomTodoIds } from "@/store/atoms"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoIds = useRecoilValue(atomTodoIds)

  const hasTodos = Array.isArray(todoIds) && todoIds.length

  return (
    <div className="z-20 h-full pr-4 my-2 scrollbar-thin scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl scrollbar-thumb-transparent/10 hover:scrollbar-thumb-transparent/20 scrollbar-track-transparent/5">
      {hasTodos ? (
        <div
          id="투두리스트"
          className="grid grid-cols-1 gap-3"
        >
          {todoIds.reduce((prev: ReactNode[], todoId: number) => {
            return [
              ...prev,
              <TodoItem
                key={todoId}
                todoId={todoId}
              />,
            ]
          }, [])}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default TodoList
