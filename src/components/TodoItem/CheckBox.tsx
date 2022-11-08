import { TodoItemType } from "@/components/TodoItem"

const CheckBox = (
  props: Pick<TodoItemType, "id" | "isCheck" | "checkboxImg">,
) => {
  const { isCheck, checkboxImg } = props

  console.log(checkboxImg)

  return (
    <div className="w-10 h-10 ">
      <div className={`${checkboxImg}  w-full h-full bg-cover`} />
    </div>
  )
}
export default CheckBox
