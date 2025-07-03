import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"
import "@danny270793/w3css/dist/w3css.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
