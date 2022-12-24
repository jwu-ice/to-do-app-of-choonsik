import { RecoilRoot } from "recoil"
import 춘식이타이틀 from "@/assets/choonsik-title.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"
import SettingBox from "@/components/SettingBox"

const App = () => {
  return (
    <RecoilRoot>
      <div className="mx-auto flex h-[500px] w-[380px] flex-col gap-1 bg-choonsik-bg bg-contain bg-no-repeat pl-6 pr-10">
        <div className="relative mt-4 flex items-center justify-center">
          <div id="title" className="w-[220px]">
            <img
              className="object-cover object-center"
              src={춘식이타이틀}
              alt={춘식이타이틀}
            />
          </div>
          <SettingBox />
        </div>
        <TodoList />
        <TodoInput />
      </div>
    </RecoilRoot>
  )
}

export default App
