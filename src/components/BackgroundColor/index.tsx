import { useRecoilValue } from "recoil"
import { atomBgColor } from "@/store/bgColor"

const BackgroundColor = () => {
  const bgColor = useRecoilValue(atomBgColor)

  return (
    <div
      className="absolute -z-50 h-screen w-screen"
      style={{ backgroundColor: bgColor }}
    />
  )
}

export default BackgroundColor
