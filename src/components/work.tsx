import gsap from "gsap"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { iWork } from "../data/work.data"
import { iCategoryState } from "../redux/category.slice"
import styles from "../styles/Work.module.scss"

export default function Work({
  redirect,
}: {
  redirect: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const work = useSelector((state: iCategoryState) => state.category.data.work)
  useEffect(() => {
    gsap.fromTo(
      ".workItem",
      {
        opacity: 0,
        y: 50,
        x: 30,
        rotateX: 60,
        transformOrigin: "top center",
        rotateY: -5,
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        transformOrigin: "top center",
        rotateY: 0,
        duration: 1,
        stagger: 0.3,
        ease: "linear",
      },
    )
  })
  return (
    <div className={styles.container}>
      {work.map((workItem: iWork, index: number) => {
        return (
          <div
            style={{ gridColumn: `span ${workItem.ocupation}` }}
            className={`workItem ${styles.workItem}`}
            key={`work_${index}`}
            onClick={() => redirect(true)}>
            <div className={styles.mainTitle}>{workItem.mainTitle}</div>
            <div className={styles.title}>{workItem.title}</div>
            <img className={styles.image} src={workItem.image} alt="" />
            <div className={styles.overlay}></div>
            <div className={styles.icons}>
              {workItem.icons.map((icon: string, index: number) => (
                <div key={`icon_${index}`} className={styles.icon}>
                  <img className={styles.iconImg} src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
