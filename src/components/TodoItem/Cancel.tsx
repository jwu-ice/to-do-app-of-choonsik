import { useDispatchTodoIds } from "@/store/todoIds"

const Cancel = ({ id }: { id: number }) => {
  const { dispatch } = useDispatchTodoIds()

  const handleDelete = () => {
    dispatch({ type: "DELETE", targetId: id })
  }

  return (
    <div
      onClick={handleDelete}
      className="group/cancel group-hover/item:visible invisible absolute right-2 top-1/2 -translate-y-1/2 transition p-0.5 rounded-full hover:bg-slate-100/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 fill-slate-600 hover:fill-slate-900"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </div>
  )
}

export default Cancel
