import { atom } from "recoil"
import { BG_COLOR_KEY_STORE, DEFAULT_BGCOLOR } from "@/constants"
import LocalStore from "@/utils/localStore"

const atomBgColorEffect =
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

export type HexType = string

export const atomBgColor = atom<HexType>({
  key: "atomBgColor",
  default: LocalStore.get(BG_COLOR_KEY_STORE) ?? DEFAULT_BGCOLOR,
  effects: [atomBgColorEffect(BG_COLOR_KEY_STORE)],
})
