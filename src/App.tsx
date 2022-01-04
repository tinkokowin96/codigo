import { useState } from "react"
import Details from "./components/details"
import Footer from "./components/footer"
import Header from "./components/header"
import Navigation from "./components/navigation"
import Work from "./components/work"

function App() {
  console.log("Why....")
  const [redirect, setRedirect] = useState(false)
  if (redirect) {
    return <Details redirect={setRedirect} />
  }
  return (
    <div className="App">
      <Navigation redirect={null} showFeatures />
      <Header />
      <Work redirect={setRedirect} />
      <Footer />
    </div>
  )
}

export default App
