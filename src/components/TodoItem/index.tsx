import CheckBox from "@/components/TodoItem/CheckBox"
import Line from "@/components/TodoItem/Line"
import TextInput from "@/components/TodoItem/TextInput"

type TodoItemType = {
  text: string
  isCheck: boolean
  checkboxImg?: string
  lineImg?: string
}

const TodoItem = ({ text, isCheck, checkboxImg, lineImg }: TodoItemType) => {
  //  isCheck, text
  return (
    <div className="">
      <CheckBox />
      <TextInput />
      <Line />
    </div>
  )
}

export default TodoItem
