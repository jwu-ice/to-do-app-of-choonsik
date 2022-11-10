import { useEffect, useState } from "react"
import LocalStore from "@/utils/localStore"

type StoreKeyType = "todos"

export default function useLocalStorage(key: StoreKeyType) {
  const [store, setStore] = useState(LocalStore.get(key))

  // 추가, 삭제, 수정(텍스트, 체크박스)
  const addData = (newData: object) => {
    const newStore = [...store, newData]
    setStore(newStore)
  }

  const deleteData = <T>(id: number) => {
    const newStore = store.filter((data: Record<"id", T>) => data.id !== id)
    setStore(newStore)
  }

  const updateData = (id: number, updateProperty: object) => {
    const newStore = store.map((data: { id: number }) =>
      data.id === id ? { ...data, ...updateProperty } : data,
    )
    setStore(newStore)
  }

  useEffect(() => {
    LocalStore.set(key, store)
  }, [store])

  return { store, addData, deleteData, updateData }
}
