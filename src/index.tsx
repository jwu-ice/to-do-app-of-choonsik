import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App"
import "@/style.css"
import { RecoilRootWrapper } from "@/utils/RecoilRootWrapper"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RecoilRootWrapper>
      <App />
    </RecoilRootWrapper>
  </React.StrictMode>,
)
