import { useDispatch, useSelector } from "react-redux"
import { eIcon, eCategory } from "../data/work.data"
import { CategoryState, changeCategory } from "../redux/category.slice"
import { AppDispatch } from "../redux/store"
import styles from "../styles/Header.module.scss"

export default function Header() {
  const currentWork = useSelector((state: CategoryState) => {
    return state.category.key
  })
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Here's 5% of <br />
        our published work. <br />
        <span>See 100% of our power.</span>
      </div>

      <div className={styles.workContainer}>
        <div className={styles.work}>
          {Object.entries(eCategory).map(([category, work], index: number) => {
            return (
              <div
                className={styles.workItem}
                key={`category_${index}`}
                data-current={currentWork === category && "true"}
                onClick={() => dispatch(changeCategory(category))}>
                <div>{work}</div>
              </div>
            )
          })}
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
