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
  const hamburgerRef = useRef(null)

  const clickMenuHandler = () => {
    const menuEle = menuRef.current as unknown as HTMLElement
    if (menu && !menu.open) {
      menuEle.dataset.open = "true"
      menuOpenHandler()
    } else if (menu && menu.open) {
      menuEle.dataset.open = "false"
      menu?.set(false)
      menuCloseHandler()
    }
  }

  const menuOpenHandler = () => {
    gsap.set(menuRef.current, {
      borderRadius: 0,
      position: "fixed",
      top: 0,
      right: 0,
      width: "100vw",
      height: "100vh",
      clipPath: "circle(10% at 100% 0%)",
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
    gsap.set(hamburgerRef.current, {
      top: "2rem",
      right: "1.76rem",
    })
    gsap.to(menuRef.current, {
      clipPath: "circle(2.5% at 95.5% 4.5%)",
      duration: 0.5,
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
      <div className={styles.hamMenu} ref={menuRef} onClick={clickMenuHandler}>
        <div className={styles.hamburger} ref={hamburgerRef}>
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
