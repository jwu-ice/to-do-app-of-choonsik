import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  memo,
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
  const [height, setHeight] = useState<string | undefined>("0")

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
        setHeight(`${textareaRef.current?.scrollHeight}px`)
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
    setHeight(`${textareaRef.current?.scrollHeight}px`)
  }, [])

  // drag and drop 대비
  // const handlePreventEvent = (e: MouseEvent<HTMLTextAreaElement>) => {
  //   e.preventDefault()
  // }

  // const handleFocus = (e: MouseEvent<HTMLTextAreaElement>) => {
  //   e.currentTarget.focus()
  // }

  return (
    <textarea
      onChange={handleChangeValue}
      onKeyDown={handleEnterToTap}
      // onClick={(e) => (e.currentTarget.disabled = true)}
      // onMouseDown={handlePreventEvent}
      // onMouseUp={handleFocus}
      ref={textareaRef}
      style={{ height: height }}
      className={`${
        isCheck ? "text-checked" : ""
      } ${height} w-full cursor-pointer resize-none overflow-hidden bg-transparent px-1 pr-5 outline-none placeholder:text-black  placeholder:opacity-50 focus:cursor-text focus:rounded-xl focus:ring-2 focus:ring-black/30`}
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

export default memo(TextArea)
