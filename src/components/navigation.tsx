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

  const clickMenuHandler = () => {
    if (menu && !menu.open) {
      menu.set(true)
    } else if (menu && menu.open) {
      menu.set(false)
    }
  }

  return (
    <div className={styles.container} data-open={menu && menu.open && "true"}>
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
