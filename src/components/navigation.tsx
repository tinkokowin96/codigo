import styles from "../styles/Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <img src="./icons/logo.svg" alt="" />
      <div className={styles.actions}>
        <div className={styles.work}>Work</div>
        <div>Solutions</div>
        <div>Services</div>
        <div>About us</div>
        <div className={styles.request}>Request a quote</div>
      </div>
    </div>
  );
}
