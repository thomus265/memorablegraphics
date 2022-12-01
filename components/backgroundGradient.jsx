import styles from "../styles/BackgroundGradient.module.css";
import { motion } from "framer-motion"

const BackgroundGradient = () => {
    const rotatingGradient = {
        initial: {
          y: 0,
          x: 0
        },
        animate: {
          y: '90vh',
          x: '90vw',
          transition: {
            duration: 30,
            delay: 2
          }
        }
    }
  return (
    <motion.div variants={rotatingGradient} initial="initial" animate="animate">
      <div className={styles.gradient}></div>
      <div className={styles.gradient2}></div>
    </motion.div>
  );
};

export default BackgroundGradient;
