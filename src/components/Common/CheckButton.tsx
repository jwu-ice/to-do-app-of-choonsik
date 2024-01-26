import { ComponentProps } from "react"

type PropsT = {
  className?: ComponentProps<"div">["className"]
  onClick?: () => void
}

const CheckButton = ({ className, onClick }: PropsT) => {
  return (
    <div
      onClick={onClick}
      className={`h-full w-full cursor-pointer bg-checkbox-1 bg-cover hover:opacity-70 ${className}`}
    ></div>
  )
}

export default CheckButton
