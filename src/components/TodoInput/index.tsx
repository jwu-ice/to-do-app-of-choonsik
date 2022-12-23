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

          // [ ] TODO 개수 제한
          // if (todoIds.length >= TODO_ITEMS_COUNT) return

          const newId = todoIds?.length ? Math.max(...todoIds) + 1 : 1

          dispatchTodoIds({ type: "CREATE", newId: newId })
          dispatchTodo(newId, { type: "EDIT_TEXT", text: text })
          setText("")
        }
      },
  )

  return (
    <div className="mt-auto mb-28 h-28 px-6">
      <div className="h-full bg-choonsik-input bg-contain bg-center bg-no-repeat py-12">
        <input
          className="w-2/3 overflow-hidden bg-transparent pl-8 text-3xl placeholder:pl-8 placeholder:text-4xl placeholder:text-black/50 focus:outline-none"
          type="text"
          placeholder="할 일을 입력하라구"
          onChange={handleChangeText}
          onKeyDown={handleCreateTodo}
          value={text}
        />
      </div>
    </div>
  )
}

export default TodoInput
