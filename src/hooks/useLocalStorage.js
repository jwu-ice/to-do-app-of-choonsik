import { useCallback, useEffect, useMemo } from "react"

//! deprecated
export default function useLocalStorage(key) {
  const storedData = useMemo(() => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }, [])

  const setStoredData = useCallback((value) => {
    const newValue = JSON.stringify(value)
    localStorage.setItem(key, newValue)
  }, [])

  return [storedData, setStoredData]
}
