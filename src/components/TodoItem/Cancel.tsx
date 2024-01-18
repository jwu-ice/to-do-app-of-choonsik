import { memo, useEffect, useRef } from "react"
import { useDispatchTodoIds } from "@/store/todoIds"
import XButton from "@/components/Common/XButton"

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
      <XButton />
    </div>
  )
}

export default memo(Cancel)
