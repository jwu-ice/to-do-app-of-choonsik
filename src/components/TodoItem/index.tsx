import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  ChangeEvent,
  memo,
  useCallback,
  useMemo,
  useRef,
  useTransition,
} from "react"
import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"
import { todoJSONType } from "@/components/TodoList"
import { atomFamilyTodo, atomTodoList } from "@/store/atoms"
import LocalStore from "@/utils/localStore"

const TodoItem = (props: {
  todo: todoJSONType
  todos: todoJSONType[]
  index: number
}) => {
  const { todo, todos, index } = props
  const {
    todo: { isCheck, text },
  } = props

  const setTodos = useSetRecoilState(atomTodoList)

  const [localTodo, setLocalTodo] = useRecoilState(atomFamilyTodo(todo.id))

  const maxId = useMemo(
    () => Math.max(...todos.map(({ id }) => id)),
    [todos.length],
  )

  const getCreatedTodos = [
    {
      id: maxId + 1,
      text: "",
      isCheck: false,
      date: new Date(),
    },
    ...todos,
  ]

  const getToggledTodos = [
    ...todos.slice(0, index),
    { ...todo, isCheck: !isCheck },
    ...todos.slice(index + 1),
  ]

  const getTextedTodos = (newText: string) => [
    ...todos.slice(0, index),
    { ...todo, text: newText },
    ...todos.slice(index + 1),
  ]

  const handleToggleCheck = () => {
    setTodos(getToggledTodos)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetText = e.target.value

    setTimeout(() => {
      if (targetText === e.target.value) {
        setTodos(getTextedTodos(targetText ?? ""))
      }
    }, 300)
  }

  return (
    <div className="flex gap-2 p-2">
      <CheckBox isCheck={isCheck} handleToggleCheck={handleToggleCheck} />
      <div className="w-full">
        <TextInput text={text} handleTextChange={handleTextChange} />
        <Line />
      </div>
    </div>
  )
}

// export default memo(TodoItem, (prev, next) => {
//   const { todo: prevTodo } = prev
//   const { todo: nextTodo } = next

//   const memoResult =
//     prev.index === next.index &&
//     prevTodo.text === nextTodo.text &&
//     prevTodo.isCheck === nextTodo.isCheck

//   return memoResult
// })

export default TodoItem
