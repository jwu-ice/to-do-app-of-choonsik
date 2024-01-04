import { RecoilRoot } from "recoil"
import CHOONSIK_TITLE from "@/assets/choonsik-title.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"
import SettingBox from "@/components/SettingBox"

const App = () => {
  const bgColor = `bg-[#52d3ff]`

  return (
    <RecoilRoot>
      <div
        className={`${bgColor} mx-auto flex h-[330px] w-[420px] flex-col gap-1 bg-contain bg-no-repeat pl-6 pr-10`}
      >
        <div className="relative mt-4 flex items-center justify-center">
          <div id="title" className="w-[220px]">
            <img
              className="object-cover object-center"
              src={CHOONSIK_TITLE}
              alt={CHOONSIK_TITLE}
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
