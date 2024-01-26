import { atom } from "recoil"
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_KEY_STORE,
  SelectLanguageOptions,
  TypeLang,
} from "@/constants"
import LocalStore from "@/utils/localStore"

const atomLanguageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = LocalStore.get(key)

    if (savedValue != null) {
      setSelf(savedValue)
    }

    onSet((newValue: any, oldValue: any, isReset: boolean) => {
      isReset ? LocalStore.remove(key) : LocalStore.set(key, newValue)
    })
  }

export const atomLanguage = atom<TypeLang>({
  key: "atomLanguage",
  default: LocalStore.get(LANGUAGE_KEY_STORE) ?? DEFAULT_LANGUAGE,
  effects: [atomLanguageEffect(LANGUAGE_KEY_STORE)],
})
