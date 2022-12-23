import { useState } from "react"
import Cancel from "@/components/TodoItem/Cancel"
import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextArea from "@/components/TodoItem/TextArea"

const TodoItem = (props: any) => {
  const { todoId } = props

  return (
    <div className="group/item relative z-10 rounded-2xl hover:cursor-pointer hover:bg-transparent/5">
      <div className="flex gap-2 p-2">
        <CheckBox id={todoId} />
        <TextArea id={todoId} />
      </div>
      <Cancel id={todoId} />
      <Line />
    </div>
  )
}

export default TodoItem
