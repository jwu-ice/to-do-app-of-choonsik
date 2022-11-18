import { RecoilRoot } from "recoil"
import 춘식이타이틀 from "@/assets/choonsik-title.png"
import 세팅상자 from "@/assets/settingBox.png"
import TodoList from "@/components/TodoList"

function App() {
  return (
    <RecoilRoot>
      <div
        id="배경"
        className="flex flex-col mx-auto pt-8 px-16 my-8 w-[640px] h-[926px]  bg-no-repeat bg-contain  bg-choonsik-bg"
      >
        <div id="메인제목" className="flex items-center justify-end py-3">
          <Title />
          <SettingBox />
        </div>
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

function Title() {
  return (
    <div className="w-[429px] h-[88px] ">
      <img
        className="object-cover object-center"
        src={춘식이타이틀}
        alt={춘식이타이틀}
      />
    </div>
  )
}

function SettingBox() {
  return (
    <button className="">
      <img
        className="object-cover object-center"
        src={세팅상자}
        alt={세팅상자}
      />
    </button>
  )
}

export default App
