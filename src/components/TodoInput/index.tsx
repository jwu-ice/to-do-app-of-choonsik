import { ChangeEvent, KeyboardEvent, useState } from "react"
import { useRecoilCallback, useSetRecoilState } from "recoil"
import { atomFamilyTodo } from "../../store/atoms"
import { atomTodoIds } from "@/store/atoms"
import { TODO_ITEMS_COUNT } from "@/settings"

const TodoInput = () => {
  const [text, setText] = useState<string>("")
  const setTodoIds = useSetRecoilState(atomTodoIds)

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setText(value)
  }

  const handleCreateTodo = useRecoilCallback(
    ({ snapshot, set }) =>
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && text.trim() !== "") {
          const todoIds = snapshot.getLoadable(atomTodoIds).contents

          // [ ] TODO 개수 제한
          // if (todoIds.length >= TODO_ITEMS_COUNT) return

          const newId = todoIds?.length ? Math.max(...todoIds) + 1 : 1

          setTodoIds((currIds) => {
            return [...currIds, newId]
          })
          set(atomFamilyTodo(newId), (currTodo) => ({
            ...currTodo,
            text: text.trim(),
          }))
          setText("")
        }
      },
  )

  return (
    <div className="h-32 mt-auto mb-24">
      <div className="h-full py-12 bg-no-repeat bg-contain bg-choonsik-input ">
        <input
          className="w-2/3 pl-4 overflow-hidden text-4xl bg-transparent focus:outline-none placeholder:pl-8 placeholder:text-black/50"
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
