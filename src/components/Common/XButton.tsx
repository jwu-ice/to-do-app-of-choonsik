import { ComponentProps, MouseEventHandler } from "react"

type PropsT = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: ComponentProps<"button">["className"]
}

const XButton = ({ onClick, className }: PropsT) => {
  return (
    <button className={`h-4 w-4 ${className}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`pointer-events-none fill-slate-600 hover:fill-slate-900`}
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  )
}

export default XButton
