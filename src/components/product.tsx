import { useEffect, useState } from "react"
import { productImgs } from "../data/product.data"
import styles from "../styles/Product.module.scss"

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 < productImgs.length) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 1000)
    return () => clearInterval(interval)
  })
  return <img className={styles.productImg} src={productImgs[currentIndex]} alt="" />
}
