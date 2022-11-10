import { atom } from "recoil"
import { todoJSONType } from "@/components/TodoList"
import LocalStore from "@/utils/localStore"

export const todoListState = atom({
  key: "todoList",
  default: LocalStore.get("todos"),
})
