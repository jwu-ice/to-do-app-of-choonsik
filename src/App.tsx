import CHOONSIK_TITLE from "@/assets/choonsik-title.png"
import TodoList from "@/components/TodoList"
import TodoInput from "@/components/TodoInput"
import OptionBox from "@/components/OptionBox"
import OptionList from "@/components/OptionList"
import BackgroundColor from "@/components/BackgroundColor"

const App = () => {
  return (
    <>
      <BackgroundColor />
      <div
        className={`mx-auto flex h-[330px] w-[420px] flex-col gap-1 pl-6 pr-10`}
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
    </>
  )
}

export default App
