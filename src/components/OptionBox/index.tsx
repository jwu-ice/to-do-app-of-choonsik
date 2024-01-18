import { FC, MouseEventHandler } from "react"
import 세팅상자 from "@/assets/settingBox.png"

type OptionBoxProps = {
  handleClickOpenOption: MouseEventHandler<HTMLButtonElement>
}

const OptionBox: FC<OptionBoxProps> = ({ handleClickOpenOption }) => {
  return (
    <button
      onClick={handleClickOpenOption}
      className="absolute right-3 w-[30px] opacity-40 hover:opacity-80"
    >
      <img
        className="object-cover object-center "
        src={세팅상자}
        alt={세팅상자}
      />
    </button>
  )
}

export default OptionBox
