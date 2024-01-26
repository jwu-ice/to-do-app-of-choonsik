import { memo, useState } from "react"
import { HexColorPicker } from "react-colorful"
import { useRecoilState } from "recoil"
import { atomBgColor } from "@/store/bgColor"
import { useClickAway } from "@/hooks/useClickAway"

const ColorPicker = () => {
  const [isModal, toggleModal] = useState(false)
  const [bgColor, setBgColor] = useRecoilState(atomBgColor)

  const handleToggleModal = () => {
    toggleModal((bool) => !bool)
  }

  const handleCloseModal = () => {
    toggleModal(false)
  }

  const handleThrottleSetColor = () => {
    console.log("bgColor", bgColor)
  }

  const ref = useClickAway(handleCloseModal)

  return (
    <div className="relative">
      <button
        onClick={handleToggleModal}
        className="h-5 w-5 rounded-lg border-2 shadow-xl"
        style={{ backgroundColor: bgColor }}
      />
      {isModal && (
        <section
          ref={ref}
          className="top-[calc(100% + 10px)] react__colorful-small absolute"
        >
          <HexColorPicker onChange={setBgColor} color={bgColor} />
        </section>
      )}
    </div>
  )
}

export default memo(ColorPicker)
