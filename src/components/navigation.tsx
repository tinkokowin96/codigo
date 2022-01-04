import styles from "../styles/Navigation.module.scss"

export default function Navigation({
  redirect,
  showFeatures,
}: {
  redirect: React.Dispatch<React.SetStateAction<boolean>> | null
  showFeatures: boolean
}) {
  return (
    <div className={styles.container}>
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
    </div>
  )
}
