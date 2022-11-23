import { memo } from "react"
import TextareaAutosize from "react-textarea-autosize"

const TextInput = (props: {
  text: string
  handleTextChange: (e: any) => void
}) => {
  const { text, handleTextChange } = props

  return (
    <div className="w-full text-2xl">
      <TextareaAutosize
        className="w-full px-3 bg-transparent outline-none resize-none focus:ring-4 focus:ring-blue-400 focus:rounded-2xl placeholder:text-black placeholder:opacity-50"
        defaultValue={text}
        placeholder="할 일 입력하기"
        onChange={handleTextChange}
      />
    </div>
  )
}

// export default memo(TextInput, (prev, next) => {
//   return prev.text === next.text
// })

export default TextInput
