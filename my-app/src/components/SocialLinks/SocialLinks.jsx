import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ОФИЦИАЛЬНЫЕ СТРАНИЦЫ</h2>

      <div className={styles.linksContainer}>
        <div className={styles.linksSection}>
          <a className={styles.link}>Веб-сайт</a>
          <a className={styles.link}>Магазин</a>
        </div>

        <div className={styles.linksSection}>
          <a className={styles.link}>Facebook</a>
          <a className={styles.link}>YouTube</a>
          <a className={styles.link}>Twitter</a>
        </div>

        <div className={styles.linksSection}>
          <a className={styles.link}>Instagram</a>
          <a className={styles.link}>Pinterest</a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;