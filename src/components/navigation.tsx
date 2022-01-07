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
  const containerRef = useRef(null)
  const hamburgerRef = useRef(null)

  const clickMenuHandler = () => {
    if (menu && !menu.open) {
      menu?.set(true)
      gsap.fromTo(
        ".menuItem",
        {
          opacity: 0,
          scale: 0,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          transformOrigin: "bottom center",
          ease: "cubic-bezier(.11,.69,.94,.54)",
        },
      )
    } else if (menu && menu.open) {
      gsap.to(".menuItem", {
        opacity: 0,
        y: 20,
        duration: 0.2,
        transformOrigin: "top center",
        ease: "cubic-bezier(.11,.69,.94,.54)",
        onComplete: () => {
          menu?.set(false)
        },
      })
    }
  }

  return (
    <div className={styles.home}>
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
        <div className={styles.hamWrapper}>
          <div className={styles.hamBackground} data-open={menu && menu.open && "true"}></div>
          <div
            className={styles.hamburger}
            ref={hamburgerRef}
            data-open={menu && menu.open && "true"}
            onClick={clickMenuHandler}>
            <div className={styles.humItem}></div>
            <div className={styles.humItem}></div>
            <div className={styles.humItem}></div>
          </div>
        </div>
      </div>
      {/* {menu?.open && ( */}
      <div className={styles.menu}>
        <div className={styles.openActions}>
          <div className="menuItem"> Work</div>
          <div className="menuItem"> Solutions</div>
          <div className="menuItem"> Services</div>
          <div className="menuItem"> About us</div>
          <div className="menuItem"> Blog </div>
          <div className="menuItem"> Request a quote </div>
          <div className="menuItem"> Let&apos;s chat</div>
        </div>
        <div className={styles.icons}>
          <img className="menuItem" src="./icons/social-facebook_white.svg" alt="" />
          <img className="menuItem" src="./icons/social-twitter_white.svg" alt="" />
          <img className="menuItem" src="./icons/social-instagram_white.svg" alt="" />
          <img className="menuItem" src="./icons/social-linkedin_white.svg" alt="" />
        </div>
      </div>
      {/* )} */}
    </div>
  )
}
