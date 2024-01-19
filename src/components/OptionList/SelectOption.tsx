import { Dispatch, SetStateAction } from "react"
import { useRecoilState } from "recoil"
import { LANGUAGE_TYPE, OPTION_LIST } from "@/constants"
import { atomLanguage } from "@/store/language"

type PropsT = { setLanguage: Dispatch<SetStateAction<LANGUAGE_TYPE>> }

const SelectOption = ({ setLanguage }: PropsT) => {
  const [lang, setLang] = useRecoilState(atomLanguage)

  Object.entries().map((key, value) => {})

  return (
    <div>
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
    </div>
  )
}

export default SelectOption
