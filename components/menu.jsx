import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundGradient from "./backgroundGradient";

const loadingVariant = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

const loadingVariant2 = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2
    },
  },
};

const loadingVariant3 = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.4
    },
  },
};


const loadingVariant4 = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.6
    },
  },
};

const loadingVariant5 = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.8
    },
  },
};


const Menu = (props) => {
  return (
    <div className={styles.menu_container}>
      <BackgroundGradient/>
      <button className={styles.close_icon} onClick={props.click}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
            fill="#000000"
          />
        </svg>
      </button>
      <motion.div
        className={styles.contact_details}
        variants={loadingVariant}
        initial="initial"
        animate="animate"
      >
        <p>GET INTO TOUCH</p>
        <h2>Instagram</h2>
        <h2>happy.s.nyoni@gmail.com</h2>
        <h2>0997941505</h2>
        <h2>0881396125</h2>
      </motion.div>
      <ul
        className={styles.nav_items}
        variants={loadingVariant2}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={loadingVariant2}
          initial="initial"
          animate="animate"
        >
          <Link href={"/"} onClick={props.click}>
            <h1>home</h1>
            <motion.div className={styles.hover} whileHover={{ scaleX: 0 }} />
          </Link>
        </motion.div>
        <motion.div
          variants={loadingVariant3}
          initial="initial"
          animate="animate"
        >
          <Link
            href={"/gallery"}
            onClick={props.click}
            className={styles.gallery_container}
          >
            <h1>gallery</h1>
            <motion.div className={styles.gallery_hover} whileHover={{ scaleX: 0 }} />
            <div className={styles.gallery_count}>40</div>
          </Link>
        </motion.div>
        <motion.div variants={loadingVariant4}
          initial="initial"
          animate="animate">
        <Link href={"/contact"} onClick={props.click}>
          <h1>contact</h1>
          <motion.div className={styles.hover} whileHover={{ scaleX: 0 }} />
        </Link>
        </motion.div>
        <motion.div variants={loadingVariant5}
          initial="initial"
          animate="animate">
        <Link href={"/about"} onClick={props.click}>
          <h1>about</h1>
          <motion.div className={styles.hover} whileHover={{ scaleX: 0 }} />
        </Link>
        </motion.div>
      </ul>
    </div>
  );
};

export default Menu;
