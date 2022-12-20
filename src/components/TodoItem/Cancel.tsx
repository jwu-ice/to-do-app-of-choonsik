import { useState } from "react"

const Cancel = (props: any) => {
  const [cancelColor, setCancelColor] = useState<string>("transparent")

  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={`${cancelColor}`}
        className="w-8 h-8"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </div>
  )
}

export default Cancel