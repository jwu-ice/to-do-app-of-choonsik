import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
} from "react"
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil"
import { useMemo, useState } from "react"
import { flushSync } from "react-dom"
import { atomTodoIds } from "../../store/atoms"
import { atomFamilyTodo } from "@/store/atoms"

const TextArea = ({ id }: { id: number }) => {
  const [todo, setTodo] = useRecoilState(atomFamilyTodo(id))
  const setIds = useSetRecoilState(atomTodoIds)
  const [height, setHeight] = useState<undefined | string>("32px")
  const { text, isCheck } = todo

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value

    setTimeout(() => {
      const newTodo = { ...todo, text: currentValue }
      currentValue === e.target.value && setTodo(newTodo)
    }, 200)

    flushSync(() => {
      setHeight("auto")
    })
    flushSync(() => {
      setHeight(textareaRef.current?.scrollHeight + "px")
    })
  }

  const handleEnterToTap = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  useEffect(() => {
    setHeight("auto")
    setHeight(textareaRef.current?.scrollHeight + "px")
  }, [])

  return (
    <textarea
      onChange={handleChangeValue}
      onKeyDown={handleEnterToTap}
      ref={textareaRef}
      style={{ height: height }}
      className={`${
        isCheck ? "text-checked" : ""
      } text-3xl w-full px-3 overflow-hidden bg-transparent outline-none resize-none focus:ring-4 focus:ring-sky-400/50 focus:rounded-3xl placeholder:text-black placeholder:opacity-50 `}
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
