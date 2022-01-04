import { useState } from "react"
import { eIcon, eWork } from "../data/work.data"
import styles from "../styles/Header.module.scss"

export default function Header() {
  const [currentWork, setCurrentWork] = useState("ALL")
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Here's 5% of <br />
        our published work. <br />
        <span>See 100% of our power.</span>
      </div>

      <div className={styles.workContainer}>
        <div className={styles.work}>
          {Object.values(eWork).map((work: string, index: number) => (
            <div
              className={styles.workItem}
              data-current={currentWork === work && "true"}
              onClick={() => setCurrentWork(work)}>
              <div key={`work_${index}`}>{work}</div>
            </div>
          ))}
        </div>
        <div className={styles.legendContainer}>
          <div className={styles.lgTitle}>LEGEND</div>
          <div className={styles.legend}>
            <div className={styles.seperator}></div>
            <div className={styles.legendItems}>
              {Object.entries(eIcon).map(([name, icon], index: number) => (
                <div className={styles.lgItem} key={`icon_${index}`}>
                  <img src={icon} alt="" />
                  <div>{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
