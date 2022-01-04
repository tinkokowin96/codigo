import gsap from "gsap"
import { useEffect, useRef } from "react"
import styles from "../styles/Details.module.scss"
import Footer from "./footer"
import Navigation from "./navigation"
import Product from "./product"

export default function Details({
  redirect,
}: {
  redirect: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const productRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ".detailItem",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
      },
    )
    gsap.fromTo(
      backgroundRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
      },
    )

    gsap.fromTo(
      productRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, repeat: -1, repeatDelay: 3.5, ease: "linear", delay: 1.2 },
    )
  })

  return (
    <>
      <Navigation redirect={redirect} showFeatures={false} />
      <div className={styles.container}>
        <div className={styles.leftSlide}>
          <img src="./icons/arrow-left-white.svg" alt="" />
        </div>

        <div className={styles.details}>
          <div className={`detailItem ${styles.productName}`}>
            OCBC Pay <br />
            Anyone
          </div>
          <div className={`detailItem ${styles.stores}`}>
            <div className={`${styles.appStore} ${styles.store}`}>
              <img src="./images/ico-app_store.png" alt="" />
              <div className={styles.storeName}>
                AVAILABLE ON <br /> <span> App Store</span>
              </div>
            </div>
            <div className={`${styles.playStore} ${styles.store}`}>
              <img src="./images/ico-google_play-store.png" alt="" />
              <div className={styles.storeName}>
                AVAILABLE ON <br /> <span> Google play</span>
              </div>
            </div>
          </div>

          <div className={`detailItem ${styles.descriptions}`}>
            You can now pay kopitiam uncles, merchats, peers, and dears, with the OCBC Pay
            Anyone app, and you can even withdraw cash by scanning the QR code at OCBC&apos;s
            ATMs without your card!
          </div>

          <div className={`detailItem ${styles.featureContainer}`}>
            <div className={styles.title}>Key Features</div>
            <div className={styles.seperator}></div>
            <div className={styles.features}>
              <div>Scan to pay</div>
              <div>Transfer cash and request payment</div>
              <div>ATM QR cash withdrawl</div>
              <div>Access exclusive discounts and promotions</div>
            </div>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.productContainer}>
            <div ref={backgroundRef} className={styles.productBackground}></div>
            <div ref={productRef}>
              <Product />
            </div>
          </div>
        </div>

        <div className={styles.rightSlide}>
          <img src="./icons/arrow-right-white.svg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}
