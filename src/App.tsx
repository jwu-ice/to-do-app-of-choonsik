import { RecoilRoot } from "recoil"
import 춘식이타이틀 from "@/assets/choonsik-title.png"
import 세팅상자 from "@/assets/settingBox.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"

function App() {
  return (
    <RecoilRoot>
      <div
        id="배경"
        className=" flex flex-col mx-auto pt-8 px-8 my-8 w-[640px] h-[944px] bg-no-repeat bg-contain bg-choonsik-bg"
      >
        <div
          id="메인제목"
          className="relative flex items-center justify-center py-3 "
        >
          <Title />
          <SettingBox />
        </div>
        <TodoList />
        <TodoInput />
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
    <div className="absolute -right-1">
      <button className="opacity-50 hover:opacity-80">
        <img
          className="object-cover object-center"
          src={세팅상자}
          alt={세팅상자}
        />
      </button>
    </div>
  )
}

export default App
