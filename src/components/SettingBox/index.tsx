import 세팅상자 from "@/assets/settingBox.png"

const SettingBox = () => {
  return (
    <button className="absolute right-3 w-[30px] opacity-40 hover:opacity-80">
      <img
        className="object-cover object-center "
        src={세팅상자}
        alt={세팅상자}
      />
    </button>
  )
}

export default SettingBox
