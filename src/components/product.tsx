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
    }, 2500)
    return () => clearInterval(interval)
  })
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={productImgs[currentIndex]} alt="" />
      </div>
      <div className={styles.imgPosContainer}>
        {productImgs.map((_: string, index: number) => (
          <div
            style={{ backgroundColor: currentIndex === index ? "red" : "rgb(162, 164, 165)" }}
            key={`imgPos_${index}`}
            className={styles.imgPos}></div>
        ))}
      </div>
    </div>
  )
}
