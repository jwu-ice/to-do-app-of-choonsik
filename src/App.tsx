import { RecoilRoot } from "recoil"
import { MouseEvent, MouseEventHandler, useState } from "react"
import Modal from "react-modal"
import CHOONSIK_TITLE from "@/assets/choonsik-title.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"
import OptionBox from "@/components/OptionBox"
import OptionPage from "@/layout/OptionPage"

const bgColor = `bg-[#52d3ff]`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpenOption = () => {
    setIsOpen(true)
  }

  const handleCloseOption = (e: MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
  }

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
          <OptionBox handleClickOpenOption={handleClickOpenOption} />
          <OptionPage isOpen={isOpen} handleCloseOption={handleCloseOption} />
        </div>
        <TodoList />
        <TodoInput />
      </div>
    </RecoilRoot>
  )
}

export default App
