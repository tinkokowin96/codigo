import { useState } from "react"
import Details from "./components/details"
import Footer from "./components/footer"
import Header from "./components/header"
import Navigation from "./components/navigation"
import Work from "./components/work"
import styles from "./styles/App.module.scss"

function App() {
  const [redirect, setRedirect] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  // const menuRef = useRef(null)
  if (redirect) {
    return <Details redirect={setRedirect} />
  }

  return (
    <div className={styles.App} data-open={openMenu && "true"}>
      {/* <div className={styles.menuContainer} ref={menuRef}>
        {openMenu && (
          <div className={styles.menu}>
            <div className={styles.close} onClick={closeMenuHandler}>
              x
            </div>
            <div className={styles.actions}>
              <div> Work</div>
              <div> Solutions</div>
              <div> Services</div>
              <div> About us</div>
              <div> Blog </div>
              <div> Request a quote </div>
              <div> Let&apos;s chat</div>
            </div>
            <div className={styles.icons}>
              <img src="./icons/social-facebook_white.svg" alt="" />
              <img src="./icons/social-twitter_white.svg" alt="" />
              <img src="./icons/social-instagram_white.svg" alt="" />
              <img src="./icons/social-linkedin_white.svg" alt="" />
            </div>
          </div>
        )}
      </div> */}
      <Navigation redirect={null} showFeatures menu={{ open: openMenu, set: setOpenMenu }} />
      <Header />
      <Work redirect={setRedirect} />
      <Footer />
    </div>
  )
}

export default App
