import gsap from "gsap"
import { useRef } from "react"
import styles from "../styles/Navigation.module.scss"

interface iNavigation {
  redirect: React.Dispatch<React.SetStateAction<boolean>> | null
  showFeatures: boolean
  menu?: {
    open: boolean
    set: React.Dispatch<React.SetStateAction<boolean>>
  } | null
}

export default function Navigation({ redirect, showFeatures, menu = null }: iNavigation) {
  const menuRef = useRef(null)
  const containerRef = useRef(null)

  const clickMenuHandler = () => {
    if (menu && !menu.open) {
      menuOpenHandler()
    } else if (menu && menu.open) {
      menuCloseHandler()
    }
  }

  const menuOpenHandler = () => {
    gsap.set(containerRef.current, {
      margin: 0,
    })

    gsap.set(menuRef.current, {
      borderRadius: 0,
      position: "absolute",
      top: 0,
      right: 0,
      width: "100vw",
      height: "100vh",
      clipPath: "circle(10% at 100% 0)",
    })

    gsap.to(menuRef.current, {
      clipPath: "circle(120% at 100% 0)",
      duration: 0.7,
      onComplete: () => {
        menu?.set(true)
      },
    })
  }

  const menuCloseHandler = () => {
    const isPhone = window.innerWidth > 500 ? false : true

    gsap.to(menuRef.current, {
      position: "absolute",
      clipPath: "circle(10% at 100% 0)",
      duration: 0.5,
    })

    gsap.set(menuRef.current, {
      clipPath: "none",
      position: "relative",
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      delay: 0.5,
      ease: "linear",
      onComplete: () => {
        gsap.set(containerRef.current, {
          margin: isPhone ? "1.3rem" : "2rem 3.12rem",
        })
        menu?.set(false)
      },
    })
  }

  return (
    <div
      className={styles.container}
      ref={containerRef}
      data-open={menu && menu.open && "true"}>
      {showFeatures && <img className={styles.logo} src="./icons/logo.svg" alt="" />}
      {!showFeatures && redirect && (
        <div className={styles.backWork} onClick={() => redirect(false)}>
          <img src="./icons/arrow-red.svg" alt="" />
          <div>Back to work</div>
        </div>
      )}
      <div className={styles.hamMenu} ref={menuRef} data-open={menu && menu.open && "true"}>
        <div className={styles.hamburger} onClick={clickMenuHandler}>
          <div className={styles.humItem}></div>
          <div className={styles.humItem}></div>
          <div className={styles.humItem}></div>
        </div>

        {menu?.open && (
          <div className={styles.menu}>
            <div className={styles.openActions}>
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
      </div>
      <div className={styles.actions}>
        {showFeatures && (
          <>
            <div className={styles.work}>Work</div>
            <div>Solutions</div>
            <div>Services</div>
            <div>About us</div>
          </>
        )}
        <div className={styles.request}>Request a quote</div>
      </div>
    </div>
  )
}
