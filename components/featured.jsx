import Image from "next/image";
import styles from "../styles/Featured.module.css";
import MyButton from "./myButton";
import { motion } from "framer-motion"



const Featured = () => {
  return (
    <div>
      <div className={styles.featured1_container}>
        <Image className={styles.hover_image} src={"/IMG_1071.JPG"} width={200} height={200} quality={100}/>
        <div className={styles.featured1}>
          <h3>Capture love, joy and everything in between</h3>
          <p>
            Seal your vows with proffesianally taken images that'll ensure your big day is remembered now & beyond. We put affordable prices on your priceless emotions
          </p>
          <MyButton />
        </div>
        <motion.div className={styles.img_container} whileHover={{ scale: 1.05, skewY: 4}}>
          <Image className={styles.feat_img} src={"/IMG-1396.JPG"} width={200} height={300} quality={100}/>
        </motion.div>
      </div>

      <div className={styles.featured2_container}>
      <motion.div className={styles.img_container} whileHover={{ scale: 1.05, skewY: -4}}>
          <Image className={styles.feat_img} src={"/IMG-1416.JPG"} width={200} height={300} quality={100}/>
        </motion.div>
        <div className={styles.featured2}>
          <h3>
            Using our lens to tell your story
          </h3>
          <p>
            We expertly capture every detail of your speacial day so that when you look back, it feels like you have jumped right back to the day. But above all else, our heart is to capture your incredible stories and scar your brain with smiles.
          </p>
          <MyButton />
        </div>
      </div>

      <div className={styles.featured3_container}>
        <div className={styles.featured3}>
          <h3>
            Today's speacial moments, tommorow's priceless treasures
          </h3>
          <p>
            Birthdays arent complete without nice photos to share with your friends and families. Get in touch with us and we'll sure bring the life to you party.
          </p>
          <MyButton />
        </div>
        <motion.div className={styles.img_container} whileHover={{ scale: 1.05, skewY: 4}}>
          <Image className={styles.feat_img} src={"/IMG_1071.JPG"} width={200} height={300} />
        </motion.div>
      </div>


      <div className={styles.featured2_container}>
      <motion.div className={styles.img_container} whileHover={{ scale: 1.05, skewY: -4}}>
          <Image className={styles.feat_img} src={"/IMG-1403.JPG"} width={200} height={300} quality={100}/>
        </motion.div>
        <div className={styles.featured2}>
          <h3>
          Jaw-dropping product pictures are the best way to generate customer engagement.
          </h3>
          <p>
          The details are not the details. They make the design. Contact us and we'll sure give your product the buzz it needs to realise its potential
          </p>
          <MyButton />
        </div>
      </div>
    </div>
  );
};

export default Featured;
