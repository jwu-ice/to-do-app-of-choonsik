import { useRecoilState } from "recoil"
import { MouseEventHandler } from "react"
import { EntriesType, OPTION_TITLE } from "../constants/index"
import XButton from "@/components/Common/XButton"
import { OPTION_LIST } from "@/constants"
import { atomLanguage } from "@/store/language"
import OptionItem from "@/components/OptionItem"
import CheckButton from "@/components/Common/CheckButton"
import ColorPicker from "@/components/Common/ColorPicker"
import SelectOption from "@/components/Common/SelectOption"
import Modal from "@/components/Common/Modal"

type PropsT = {
  isOpen: boolean
  handleCloseOption: MouseEventHandler
}

const OptionPage = ({ isOpen, handleCloseOption }: PropsT) => {
  const [language, setLanguage] = useRecoilState(atomLanguage)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClickAllDeleteTodoList = () => {}

  const OptionList = Object.entries(OPTION_LIST).map(
    ([optionName, lang], index) => {
      const TargetComponent = {
        DO_DELETE_ALL: <CheckButton onClick={handleClickAllDeleteTodoList} />,
        CHANGE_BACKGROUND_COLOR: <ColorPicker />,
        CHANGE_LANGUAGE: <SelectOption />,
      }

      return (
        <OptionItem
          targetComponent={TargetComponent[optionName]}
          languageType={language}
          onClick={() => {
            "void"
          }}
          optionName={optionName}
          key={index}
          tabIndex={index}
        />
      )
    },
  )

  return (
    <>
      {isOpen && (
        <Modal>
          <div
            onClick={handleCloseOption}
            className="fixed inset-0 z-10 h-full w-full bg-black/40"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={
                "absolute top-1/2 left-1/2 z-20 h-auto w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-5 shadow-xl"
              }
            >
              <div className="h-full space-y-2">
                <h2 className="mb-3 text-xl ">{OPTION_TITLE[language]}</h2>
                {OptionList}
                <XButton
                  onClick={handleCloseOption}
                  className="absolute right-3 top-1"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default OptionPage
