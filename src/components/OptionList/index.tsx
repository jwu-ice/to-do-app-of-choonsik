import { useRecoilState, useRecoilValue } from "recoil"
import { MouseEvent, memo, useCallback, useState } from "react"
import XButton from "@/components/Common/XButton"
import { atomLanguage } from "@/store/language"
import OptionItem from "@/components/OptionItem"
import CheckButton from "@/components/Common/CheckButton"
import ColorPicker from "@/components/OptionItem/ColorPicker"
import SelectOption from "@/components/OptionItem/SelectOption"
import Modal from "@/components/Common/Modal"
import { atomOptionModal } from "@/store/optionModal"
import { useDispatchTodoIds } from "@/hooks/useDispatchTodoIds"
import { TEXT_LOCAL, TypeLang } from "@/constants"

const OptionList = () => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(atomOptionModal)
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)
  const language = useRecoilValue<TypeLang>(atomLanguage)
  const { dispatch } = useDispatchTodoIds()

  const handleClickAllDeleteTodoList = useCallback(() => {
    const isDeleteAll = confirm(TEXT_LOCAL[language].confirm_delete)

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
                "absolute top-14 left-1/2 z-20 h-auto w-80 -translate-x-1/2 rounded-lg bg-white p-5 shadow-xl"
              }
            >
              <div className="h-full space-y-2">
                <h2 className="mb-3 text-xl ">
                  {TEXT_LOCAL[language].option_preference}
                </h2>
                <>
                  <OptionItem
                    onClick={handleClickAllDeleteTodoList}
                    lang={language}
                    text={"option_do_delete_all"}
                    tabIndex={1}
                    className={"h-4 w-4"}
                  >
                    <CheckButton />
                  </OptionItem>
                  <OptionItem
                    onClick={() => ""}
                    lang={language}
                    text={"option_change_background_color"}
                    tabIndex={2}
                  >
                    <ColorPicker />
                  </OptionItem>

                  <OptionItem
                    onClick={() => ""}
                    lang={language}
                    text={"option_change_language"}
                    tabIndex={3}
                  >
                    <SelectOption />
                  </OptionItem>
                </>
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
