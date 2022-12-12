import { ChangeEvent, useCallback, useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { useState } from "react"
import { flushSync } from "react-dom"
import { atomFamilyTodo } from "@/store/atoms"

const TextInput = ({ id }: { id: number }) => {
  const [height, setHeight] = useState<undefined | number | string>(32)
  const [todo, setTodo] = useRecoilState(atomFamilyTodo(id))
  const { text } = todo
  const [a, setA] = useState(0)
  const handles = () => {
    setA((t) => t + 1)
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const currentValue = e.target.value

      setTimeout(() => {
        currentValue === e.target.value &&
          setTodo({ ...todo, text: currentValue })
      }, 300)

      flushSync(() => {
        setHeight("auto")
      })
      flushSync(() => {
        setHeight(textareaRef.current?.scrollHeight + "px")
      })
    },
    [text],
  )

  useEffect(() => {
    flushSync(() => {
      setHeight("auto")
    })
    flushSync(() => {
      setHeight(textareaRef.current?.scrollHeight + "px")
    })
  }, [])

  return (
    <>
      <p contentEditable>22</p>
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
    </>
  )
}

export default TextInput
