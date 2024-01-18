import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }: PropsWithChildren) => {
  return <>{createPortal(children, document.body)}</>
}

export default Modal
