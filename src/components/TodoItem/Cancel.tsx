import { MouseEvent, memo, useEffect, useRef } from "react"
import { useDispatchTodoIds } from "@/store/todoIds"

const Cancel = ({ id }: { id: number }) => {
  const { dispatch } = useDispatchTodoIds()
  const intervalRef = useRef<number | null>(null)

  const handleStartDelete = () => {
    if (intervalRef.current) return
    intervalRef.current = window.setInterval(() => {
      dispatch({ type: "DELETE", targetId: id })
    }, 500)
  }

  const handleStopDelete = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      handleStopDelete()
    }
  }, [])

  return (
    <div
      onMouseDown={handleStartDelete}
      onMouseUp={handleStopDelete}
      className="group/cancel invisible absolute right-2 top-1/2 -translate-y-1/2 rounded-full  p-0.5 group-hover/item:visible active:shadow-animate-slide active:duration-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4 fill-slate-600 hover:fill-slate-900"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </div>
  )
}

export default memo(Cancel)
