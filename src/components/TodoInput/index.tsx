import { ChangeEvent, KeyboardEvent, useState } from "react"
import { useRecoilCallback, useRecoilValue } from "recoil"
import { useDispatchTodo } from "@/hooks/useDispatchTodo"
import { useDispatchTodoIds } from "@/hooks/useDispatchTodoIds"
import { atomTodoIds } from "@/store/todoIds"
import { TEXT_LOCAL } from "@/constants"
import { atomLanguage } from "@/store/language"

const TodoInput = () => {
  const [text, setText] = useState<string>("")
  const lang = useRecoilValue(atomLanguage)
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
        placeholder={TEXT_LOCAL[lang].todoItem_placeholder}
        onChange={handleChangeText}
        onKeyUp={handleCreateTodo}
        value={text}
      />
    </div>
  )
}

export default TodoInput
