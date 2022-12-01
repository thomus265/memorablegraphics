import styles from "../styles/CTA.module.css";

const CTA = () => {

  return (
    <div className={styles.cta_container}>
      <div>
      <div>
        <h1
          className={styles.text}
        >
          let's make
        </h1>
      </div>
      <h1
        className={styles.text}
      >
        great work
      </h1>
      <div>
        <h1
          className={styles.text}
        >
          together
        </h1>
      </div>
      </div>
    </div>
  );
};

export default CTA;
