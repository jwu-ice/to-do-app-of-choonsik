import { useMemo } from "react"

const Loading = () => {
  // depend on tailwind style
  const loadingSelector = useMemo(
    () => ["bg-choonsik-loading-1", "bg-choonsik-loading-2"],
    [],
  )
  const randomLoadingNumber = Math.floor(Math.random() * loadingSelector.length)
  const loadingImage = loadingSelector[randomLoadingNumber]

  return (
    <div className="">
      {loadingSelector.length ? (
        <div
          className={`${loadingImage} w-60 h-60 bg-contain bg-no-repeat bg-center mx-auto mt-32`}
        />
      ) : (
        <div className="mt-4 text-4xl text-center">
          <p>할 일을 입력하자!</p>
          <p>혹시 한 개도 없는거야?</p>
        </div>
      )}
    </div>
  )
}

export default Loading
