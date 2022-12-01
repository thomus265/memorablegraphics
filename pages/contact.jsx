import { motion } from "framer-motion";
import MyButton from "../components/myButton";
import styles from "../styles/Contact.module.css";

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

  const loadingVariant6 = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 1
      },
    },
  };
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>

        <motion.div
          className={styles.contact_details}
          variants={loadingVariant}
          initial="initial"
          animate="animate"
        >
          <p>GET INTO TOUCH</p>
          <h2>happy.s.nyoni@gmail.com</h2>
          <h2>0997941505</h2>
          <h2>0881396125</h2>
        </motion.div>
      </div>

      <form className={styles.contact_form}>
        <motion.div variants={loadingVariant2} initial="initial" animate="animate">
        <h1>Contact</h1>
        </motion.div>
        <motion.div variants={loadingVariant3} initial="initial" animate="animate">
        <p>For bookings and enquiries send us a messaging using the form below or send us an email the address on the side.</p>
        </motion.div>
        <motion.div className={styles.input_container} variants={loadingVariant4} initial="initial" animate="animate">
        <input placeholder="Email"/>
        </motion.div>
        <motion.div className={styles.input_container} variants={loadingVariant5} initial="initial" animate="animate">
        <input placeholder="Message"/>
        </motion.div>
        <motion.div variants={loadingVariant6} initial="initial" animate="animate">
        <MyButton/>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
