import { useRecoilState } from "recoil"
import { MouseEvent, memo, useCallback, useState } from "react"
import { DELETE_CONFIRM_TEXT, LANGUAGE_TYPE, OPTION_TEXT } from "@/constants"
import XButton from "@/components/Common/XButton"
import { OPTION_LIST } from "@/constants"
import { atomLanguage } from "@/store/language"
import OptionItem from "@/components/OptionItem"
import CheckButton from "@/components/Common/CheckButton"
import ColorPicker from "@/components/OptionList/ColorPicker"
import SelectOption from "@/components/OptionList/SelectOption"
import Modal from "@/components/Common/Modal"
import { atomOptionModal } from "@/store/optionModal"
import { useDispatchTodoIds } from "@/hooks/useDispatchTodoIds"

const OptionList = () => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(atomOptionModal)
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)
  const [isOpenChangeLanguage, setIsOpenChangeLanguage] = useState(false)
  const [language, setLanguage] = useRecoilState<LANGUAGE_TYPE>(atomLanguage)
  const { dispatch } = useDispatchTodoIds()

  const handleClickAllDeleteTodoList = useCallback(() => {
    const isDeleteAll = confirm(DELETE_CONFIRM_TEXT.confirm[language])
    if (isDeleteAll) {
      dispatch({ type: "DELETE_ALL" })
    }
  }, [dispatch, language])

  const handleCloseOption = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      setIsOpen(false)
    },
    [setIsOpen],
  )

  const OptionList = Object.entries(OPTION_LIST).map(
    ([optionName, lang], index) => {
      const TargetComponent = {
        DO_DELETE_ALL: <CheckButton onClick={handleClickAllDeleteTodoList} />,
        CHANGE_BACKGROUND_COLOR: <ColorPicker />,
        CHANGE_LANGUAGE: <SelectOption setLanguage={setLanguage} />,
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
                <h2 className="mb-3 text-xl ">{OPTION_TEXT[language]}</h2>
                {OptionList}
                <XButton
                  onClick={handleCloseOption}
                  className="absolute right-3 top-1 h-4 w-4"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default OptionList
