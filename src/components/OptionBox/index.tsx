import { useCallback } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import 세팅상자 from "@/assets/settingBox.png"
import { atomOptionModal } from "@/store/optionModal"

const OptionBox = () => {
  const setIsOpen = useSetRecoilState(atomOptionModal)

  const handleClickOpenOption = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
    <button
      onClick={handleClickOpenOption}
      className="absolute right-3 w-[30px] opacity-40 hover:opacity-80"
    >
      <img
        className="object-cover object-center "
        src={세팅상자}
        alt="setting box"
      />
    </button>
  )
}

export default OptionBox
