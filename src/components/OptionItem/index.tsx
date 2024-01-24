import {
  Attributes,
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  PropsWithRef,
  PropsWithoutRef,
  ReactNode,
} from "react"
import { TEXT_LOCAL, TypeLang, TypeText } from "@/constants"

type PropsT = {
  lang: TypeLang
  text: TypeText
  tabIndex?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  children?: ReactNode
}

const OptionItem = ({
  onClick,
  lang,
  text,
  tabIndex,
  className,
  children,
}: PropsT) => {
  return (
    <div className="flex justify-between">
      <p>{TEXT_LOCAL[lang][text]}</p>
      <button
        className={
          "focus:rounded-xl focus:outline-none focus:ring-1 " + className
        }
        onClick={onClick}
        tabIndex={tabIndex}
        role={text}
      >
        {children}
      </button>
    </div>
  )
}

export default OptionItem
