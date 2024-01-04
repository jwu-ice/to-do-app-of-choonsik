import { TODO_LOADING_IMAGE } from "@/settings"

const Loading = () => {
  const randomLoadingNumber = Math.floor(
    Math.random() * TODO_LOADING_IMAGE.length,
  )

  return (
    <div>
      {TODO_LOADING_IMAGE.length ? (
        <div
          className={`${TODO_LOADING_IMAGE[randomLoadingNumber]} mx-auto mt-10 h-32 w-32 bg-contain bg-center bg-no-repeat`}
        />
      ) : (
        <div className="mt-2 text-center text-xl">
          <p>할 일을 입력하자!</p>
          <p>혹시 한 개도 없는거야?</p>
        </div>
      )}
    </div>
  )
}

export default Loading
