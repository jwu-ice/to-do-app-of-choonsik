import { TODO_LOADING_IMAGE } from "@/constants"

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
          <p>Nothing To do!</p>
        </div>
      )}
    </div>
  )
}

export default Loading
