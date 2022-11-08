import { TodoItemType } from "@/components/TodoItem"

const Line = (props: Pick<TodoItemType, "lineImg">) => {
  const { lineImg } = props

  console.log("lineImg :>> ", lineImg)

  return (
    <div className="w-full h-4">
      {lineImg ? (
        <div className={`${lineImg} w-full h-full bg-cover bg-line`} />
      ) : (
        "없어"
      )}
    </div>
  )
}

export default Line
