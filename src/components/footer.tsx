import styles from "../styles/Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.invite}> Let&apos;s have a chat</div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div>
            <div className={styles.title}>Build</div>
            <div className={styles.description}>Help you build something</div>
          </div>
          <img src="./icons/arrow-red.svg" alt="" />
          <div className={styles.seperator}></div>
        </div>
        <div className={styles.feature}>
          <div>
            <div className={styles.title}>Co-incubate</div>
            <div className={styles.description}>Co-incubate an idea together</div>
          </div>
          <img src="./icons/arrow-red.svg" alt="" />
          <div className={styles.seperator}></div>
        </div>
        <div className={styles.feature}>
          <div>
            <div className={styles.title}>Customise</div>
            <div className={styles.description}>Customise a solution for your business</div>
          </div>
          <img src="./icons/arrow-red.svg" alt="" />
          <div className={styles.seperator}></div>
        </div>
        <div className={styles.feature}>
          <div>
            <div className={styles.title}>Organise</div>
            <div className={styles.description}>Organise learning sessions with us</div>
          </div>
          <img src="./icons/arrow-red.svg" alt="" />
          <div className={styles.seperator}></div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.icons}>
          <img src="./icons/social-facebook.svg" alt="" />
          <img src="./icons/social-twitter.svg" alt="" />
          <img src="./icons/social-instagram.svg" alt="" />
          <img src="./icons/social-linkedin.svg" alt="" />
        </div>
        <div className={styles.text}>
          Copyright &copy; Codigo - Mobile App Developer Singapore
        </div>
        <div className={styles.text}>
          +65 6455 9790 .24 Sin Ming Midview City #04-91 Singapore 573970
        </div>
      </div>
    </div>
  )
}
