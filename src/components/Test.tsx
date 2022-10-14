import { useState } from "react"

function Test() {
  const [mouse, setMouse] = useState(0)

  const handleClick = () => {
    setMouse(mouse + 1)
  }

  return (
    <div>
      <div className="bg-red-500" onClick={handleClick}>
        Test
      </div>
      <div>카운트 : {mouse}</div>
    </div>
  )
}

export default Test
