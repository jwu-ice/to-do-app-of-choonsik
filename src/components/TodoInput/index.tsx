import { ChangeEvent, KeyboardEvent, useState } from "react"
import { useRecoilCallback } from "recoil"
import { useDispatchTodo } from "@/store/todo"
import { atomTodoIds, useDispatchTodoIds } from "@/store/todoIds"

const TodoInput = () => {
  const [text, setText] = useState<string>("")
  const { dispatch: dispatchTodoIds } = useDispatchTodoIds()
  const { dispatch: dispatchTodo } = useDispatchTodo()

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setText(value)
  }

  const handleCreateTodo = useRecoilCallback(
    ({ snapshot }) =>
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && text.trim() !== "") {
          const todoIds = snapshot.getLoadable(atomTodoIds).contents

          // TODO 개수 제한
          // if (todoIds.length >= TODO_ITEMS_COUNT) return

          const newId = todoIds?.length ? Math.max(...todoIds) + 1 : 1

          dispatchTodoIds({ type: "CREATE", newId: newId })
          dispatchTodo(newId, { type: "EDIT_TEXT", text: text })
          setText("")
        }
      },
    [dispatchTodo, dispatchTodoIds, text],
  )

  return (
    <div className="mb-6 h-20 bg-choonsik-input bg-contain bg-center bg-no-repeat">
      <input
        className="overflow-hidden bg-transparent pl-24 pt-3 text-lg placeholder:text-base placeholder:text-slate-500 focus:outline-none"
        type="text"
        size={14}
        maxLength={255}
        placeholder="할 일을 입력하라구"
        onChange={handleChangeText}
        onKeyUp={handleCreateTodo}
        value={text}
      />
    </div>
  )
}

export default TodoInput
