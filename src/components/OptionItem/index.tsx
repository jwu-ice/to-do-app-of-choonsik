import { MouseEventHandler, ReactNode } from "react"
import { LANGUAGE_TYPE, OPTION_LIST, OPTION_LIST_TYPE } from "@/constants"

type PropsT = {
  onClick: MouseEventHandler<HTMLButtonElement>
  optionName: OPTION_LIST_TYPE
  languageType: LANGUAGE_TYPE
  tabIndex: number
  targetComponent: ReactNode
}

const OptionItem = ({
  onClick,
  optionName,
  languageType,
  tabIndex,
  targetComponent,
}: PropsT) => {
  return (
    <div className="flex justify-between">
      <p>{OPTION_LIST[optionName][languageType]}</p>
      <button
        className=" aspect-square h-5 focus:rounded-xl focus:outline-none focus:ring-1"
        onClick={onClick}
        tabIndex={tabIndex}
        role={optionName}
      >
        {targetComponent}
      </button>
    </div>
  )
}

export default OptionItem
