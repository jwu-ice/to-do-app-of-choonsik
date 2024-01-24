import { atom } from "recoil"
import { TypeLang } from "@/constants"

export const atomLanguage = atom<TypeLang>({
  key: "atomLanguage",
  default: "ko",
})
