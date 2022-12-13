import { ChangeEvent, useEffect, useRef } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { useState } from "react"
import { flushSync } from "react-dom"
import { atomFamilyTodo, atomTodoIsAvailable } from "@/store/atoms"

const TextInput = ({ id }: { id: number }) => {
  const [todo, setTodo] = useRecoilState(atomFamilyTodo(id))
  const setIsAvailable = useSetRecoilState(atomTodoIsAvailable)
  const [height, setHeight] = useState<undefined | number | string>(32)
  const { text } = todo

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value

    setTimeout(() => {
      const newTodo = { ...todo, text: currentValue }
      currentValue === e.target.value && setTodo(newTodo)
      setIsAvailable(true)
    }, 200)

    flushSync(() => {
      setHeight("auto")
    })
    flushSync(() => {
      setHeight(textareaRef.current?.scrollHeight + "px")
    })
    setIsAvailable(false)
  }

  useEffect(() => {
    setHeight("auto")
    setHeight(textareaRef.current?.scrollHeight + "px")
  }, [])

  return (
    <textarea
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault()
      }}
      ref={textareaRef}
      onChange={handleChangeValue}
      style={{ height: height }}
      className={`text-2xl w-full px-3 overflow-hidden bg-transparent outline-none resize-none focus:ring-4 focus:ring-blue-400 focus:rounded-2xl placeholder:text-black placeholder:opacity-50`}
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

export default TextInput
