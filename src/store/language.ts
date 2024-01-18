import { atom } from "recoil"
import { LANGUAGE_TYPE } from "@/constants"

export const atomLanguage = atom<LANGUAGE_TYPE>({
  key: "atomLanguage",
  default: "ko",
})
