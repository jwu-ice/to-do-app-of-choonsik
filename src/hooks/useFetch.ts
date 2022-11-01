import { useCallback, useEffect, useState } from "react"

export default function useFetch<T>(url: string, method = "GET") {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const refetch = useCallback(() => {
    setIsLoading(true)

    fetch(url, {
      method: method,
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    refetch()
  }, [])

  return { data, isLoading, refetch }
}
