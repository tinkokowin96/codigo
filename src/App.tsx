import { useState } from "react"
import Details from "./components/details"
import Footer from "./components/footer"
import Header from "./components/header"
import Navigation from "./components/navigation"
import Work from "./components/work"

function App() {
  const [redirect, setRedirect] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  if (redirect) {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Details redirect={setRedirect} menu={{ open: openMenu, set: setOpenMenu }} />
      </div>
    )
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navigation redirect={null} showFeatures menu={{ open: openMenu, set: setOpenMenu }} />
      <Header />
      <Work redirect={setRedirect} />
      <Footer />
    </div>
  )
}

export default App
