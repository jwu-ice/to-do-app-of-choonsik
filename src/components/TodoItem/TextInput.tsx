import { ChangeEvent, useRef } from "react"

const TextInput = (props: {
  text: string
  handleChangeText: (e: any) => void
}) => {
  const { text, handleChangeText } = props
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChangeHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChangeText(e)
    e.currentTarget.style.height = "auto"
    e.currentTarget.style.height = textareaRef.current?.scrollHeight + "px"
  }

  return (
    <textarea
      ref={textareaRef}
      onChange={handleChangeHeight}
      className={`text-2xl w-full px-3 overflow-hidden bg-transparent outline-none resize-none focus:ring-4 focus:ring-blue-400 focus:rounded-2xl placeholder:text-black placeholder:opacity-50`}
      defaultValue={text}
      placeholder="할 일 입력하기"
      rows={1}
      aria-label="할 일 입력창"
      aria-valuetext={text}
    />
  )
}

// export default memo(TextInput, (prev, next) => {
//   return prev.text === next.text
// })

export default TextInput
