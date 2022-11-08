import React, { ReactElement } from "react"
import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"

export type TodoItemType = {
  id: number
  text: string
  isCheck: boolean
  date: string
  checkboxImg?: string
  lineImg?: string
}

const TodoItem = (props: TodoItemType): ReactElement => {
  const { id, text, isCheck, checkboxImg, lineImg } = props
  return (
    <div className="flex p-4">
      <CheckBox id={id} isCheck={isCheck} checkboxImg={checkboxImg} />
      <div className="">
        <TextInput text={text} />
        <Line lineImg={lineImg} />
      </div>
    </div>
  )
}

export default React.memo(TodoItem)
