import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { useState } from "react"
import { flushSync } from "react-dom"
import { atomFamilyTodo, useDispatchTodo } from "@/store/todo"

const TextArea = ({ id }: { id: number }) => {
  const todo = useRecoilValue(atomFamilyTodo(id))
  const { text, isCheck } = todo
  const { dispatch } = useDispatchTodo()
  const [height, setHeight] = useState<undefined | string>("h-[0px]")

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const currentText = e.target.value

      setTimeout(() => {
        currentText === e.target.value &&
          dispatch(id, { type: "EDIT_TEXT", text: currentText })
      }, 200)

      flushSync(() => {
        setHeight("auto")
      })
      flushSync(() => {
        setHeight("h-[" + textareaRef.current?.scrollHeight + "px]")
      })
    },
    [dispatch, id],
  )

  const handleEnterToTap = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  useEffect(() => {
    setHeight("auto")
    setHeight("h-[" + textareaRef.current?.scrollHeight + "px]")
  }, [])

  // drag and drop 대비
  // const handlePreventEvent = (e: MouseEvent<HTMLTextAreaElement>) => {
  //   e.preventDefault()
  // }

  // const handleFocus = (e: MouseEvent<HTMLTextAreaElement>) => {
  //   e.currentTarget.focus()
  // }

  const data = 10
  return (
    <textarea
      onChange={handleChangeValue}
      onKeyDown={handleEnterToTap}
      // onMouseDown={handlePreventEvent}
      // onMouseUp={handleFocus}
      ref={textareaRef}
      // style={{ height: height }}
      className={`${
        isCheck ? "text-checked" : ""
      } ${height} cursor-pointer text-3xl w-full px-3 top-[${data}%] overflow-hidden bg-transparent outline-none resize-none focus:ring-4 focus:ring-black/30 focus:rounded-3xl placeholder:text-black placeholder:opacity-50`}
      defaultValue={text}
      maxLength={255}
      rows={1}
      placeholder="할 일 입력하기"
      aria-label="할 일 입력창"
      aria-valuetext={text}
      spellCheck="false"
    />
  )
}

export default TextArea
