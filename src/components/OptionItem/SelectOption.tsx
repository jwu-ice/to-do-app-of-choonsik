import { ChangeEvent } from "react"
import { useRecoilState } from "recoil"
import { atomLanguage } from "@/store/language"
import { SelectLanguageOptions, TypeLang } from "@/constants"

const SelectOption = () => {
  const [lang, setLang] = useRecoilState(atomLanguage)

  const handleChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as TypeLang)
  }

  return (
    <div>
      <select onChange={handleChangeOption} defaultValue={lang}>
        {SelectLanguageOptions.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectOption
