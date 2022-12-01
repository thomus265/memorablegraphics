import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <hr/>
      <div className={styles.footer_container}>
        <p>PRIVACY POLICY</p>
        <p>DISCLAIMER</p>
        <p>TERMS & CONDITIONS</p>
        <div className={styles.social_links}>Instagram Twitter Facebook</div>
      </div>
    </div>
  );
};

export default Footer;
