import { RecoilRoot } from "recoil"
import CHOONSIK_TITLE from "@/assets/choonsik-title.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"
import OptionBox from "@/components/OptionBox"
import OptionList from "@/components/OptionList"

const bgColor = `bg-[#52d3ff]`

const App = () => {
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
          <OptionBox />
          <OptionList />
        </div>
        <TodoList />
        <TodoInput />
      </div>
    </RecoilRoot>
  )
}

export default App
