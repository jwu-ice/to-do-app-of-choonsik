import { useEffect, useMemo } from "react"
import useFetch from "@/hooks/useFetch"
import TodoItem, { TodoItemType } from "@/components/TodoItem"
import LocalStore from "@/utils/localStore"
import { betweenRandomNumber } from "@/utils/number"

type todoJSONType = { id: number; text: string; isCheck: boolean; date: string }

const TodoList = () => {
  const storedTodos = LocalStore.get("todos")
  const { data, isLoading } = useFetch<todoJSONType[]>("mock/testTodos.json")

  const randomNumber = betweenRandomNumber(1, 8)

  const randomCheckboxName = `bg-checkbox-${randomNumber}`
  const randomLineName = `bg-line-${randomNumber}`

  useEffect(() => {
    data && LocalStore.set("todos", data)
  }, [])

  return (
    <div id="투두리스트" className="grid grid-cols-1 bg-blue-400 ">
      <TodoItem
        id={6}
        key={10}
        text={"예시용 텍스트 리스트입니다."}
        isCheck={true}
        date={"aa"}
        checkboxImg={randomCheckboxName}
        lineImg={randomLineName}
      />

      {isLoading && !data ? (
        <div className="">투두리스트가 로딩중!</div>
      ) : (
        storedTodos?.length &&
        storedTodos.map((todoProps: TodoItemType) => {
          const randomNumber = betweenRandomNumber(1, 8)

          return (
            <TodoItem
              key={todoProps.id}
              {...todoProps}
              checkboxImg={`bg-checkbox-${randomNumber}`}
              lineImg={`bg-line-${randomNumber}`}
            />
          )
        })
      )}
      <div className="">하하</div>
    </div>
  )
}
export default TodoList
