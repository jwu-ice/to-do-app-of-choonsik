import { memo, useCallback, useEffect, useRef } from "react"
import XButton from "@/components/Common/XButton"
import { useDispatchTodoIds } from "@/hooks/useDispatchTodoIds"

const Cancel = ({ id }: { id: number }) => {
  const { dispatch } = useDispatchTodoIds()
  const intervalRef = useRef<number | null>(null)

  const handleStartDelete = useCallback(() => {
    if (intervalRef.current) return
    intervalRef.current = window.setInterval(() => {
      dispatch({ type: "DELETE", targetId: id })
    }, 300)
  }, [dispatch, id])

  const handleStopDelete = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      handleStopDelete()
    }
  }, [handleStopDelete])

  return (
    <div
      onMouseDown={handleStartDelete}
      onMouseUp={handleStopDelete}
      onMouseLeave={handleStopDelete}
      onTouchStart={handleStartDelete}
      onTouchEnd={handleStopDelete}
      onTouchCancel={handleStopDelete}
      className="group/cancel invisible absolute right-2 top-1/2 block h-5 w-5 -translate-y-1/2 rounded-full group-hover/item:visible active:shadow-animate-slide active:duration-500"
    >
      <XButton />
    </div>
  )
}

export default memo(Cancel)
