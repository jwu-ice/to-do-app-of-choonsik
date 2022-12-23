import { RecoilRoot } from "recoil"
import 춘식이타이틀 from "@/assets/choonsik-title.png"
import 세팅상자 from "@/assets/settingBox.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"

const App = () => {
  return (
    <RecoilRoot>
      <div
        id="배경"
        className="mx-auto my-8 flex aspect-square h-full w-[360px] flex-col bg-choonsik-bg bg-contain bg-no-repeat px-8 pt-6"
      >
        <div
          id="메인제목"
          className="relative flex items-center justify-center"
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
    <div className="w-[220px] ">
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
    <button className="absolute -right-1 w-[30px] opacity-40 hover:opacity-80">
      <img
        className="object-cover object-center "
        src={세팅상자}
        alt={세팅상자}
      />
    </button>
  )
}

export default App
