import { useRecoilValue } from "recoil"
import { ReactNode } from "react"
import TodoItem from "@/components/TodoItem"
import { atomTodoList } from "@/store/atoms"

export type todoJSONType = {
  id: number
  text: string
  isCheck: boolean
  date: string
}

const TodoList = () => {
  const todoList = useRecoilValue(atomTodoList)

  return (
    <div id="투두리스트" className="grid grid-cols-1">
      {todoList.length ? (
        todoList.reduceRight((prev: ReactNode[], todo: todoJSONType, index) => {
          return [
            ...prev,
            <TodoItem
              key={todo.id}
              index={index}
              todo={todo}
              todos={todoList}
            />,
          ]
        }, [])
      ) : (
        <div>todo 작성하세요</div>
      )}
    </div>
  )
}
export default TodoList
