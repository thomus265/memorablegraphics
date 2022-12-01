import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Banner.module.css";
import { motion } from "framer-motion";

const useScrollPosition = () => {
  if (typeof window !== "undefined") {
    const [scrollYPos, setScrollYPos] = useState(!window.pageYOffset);

    const onScroll = () => {
      setScrollYPos(window.pageYOffset);
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);

    return scrollYPos;
  }
};

const loadingAnimations = {
  initial: {
    opacity: 0,
    y: "-10vh",
    skewY: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      delay: 2,
    },
  },
};

const textAnimation = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.8,
      delay: 0.2,
    },
  },
};

const textAnimation2 = {
  initial: {
    x: "200vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.8,
      delay: 0.2,
    },
  },
};

const textAnimation3 = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .7,
      delay: 0.2,
    },
  },
};

const Banner = () => {

  const imgRef = useRef(null)
  const scrollPos = useScrollPosition();
  return (
    <div className={styles.container}>
      <Image src={"/IMG_1071.JPG"} data-index="0" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="1" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="2" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="3" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="4" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="5" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="6" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="7" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="8" data-status="inactive" className={styles.img} width={200} height={200}/>
      <Image src={"/IMG_1071.JPG"} data-index="9" data-status="inactive" className={styles.img} width={200} height={200}/>
      <div className={styles.text_parent}>
        <motion.div variants={textAnimation}
          initial="initial"
          animate="animate">
        <h1
          className={styles.text}
          style={{
            transform: `translate3d(${scrollPos / 2}px, -${
              scrollPos * 0.1
            }px, 0px)`,
          }}
          
        >
          Capturing
        </h1>
        </motion.div>
        <motion.h1 className={styles.text} variants={textAnimation3} initial="initial" animate="animate">those priceless</motion.h1>
        <motion.div
          variants={textAnimation2}
          initial="initial"
          animate="animate"
        >
          <h1
            className={styles.text}
            style={{
              transform: `translate3d(-${scrollPos / 2}px, ${
                scrollPos * 0.1
              }px, 0px)`,
            }}
          >
            moments.
          </h1>
        </motion.div>
      </div>

      <motion.div
        className={styles.image_container}
        variants={loadingAnimations}
        initial="initial"
        animate="animate"
      >
        <Image
          className={styles.image_layer}
          src={"/IMG_1073.JPG"}
          width={300}
          height={400}
          quality={100}
        />
      </motion.div>

      <motion.div
        className={styles.scroll}
        whileHover={{ scale: 0.5, backgroundColor: "gray" }}
      >
        <motion.svg
          className={styles.scroll_icon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8V11H2V13H18V16L22 12L18 8Z" fill="#fff" />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Banner;
