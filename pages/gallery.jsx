import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
 

  function handleMouseMove(e){
    const gallery = document.getElementById("gallery");
    const mouseX = e.clientX,
      mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
      maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

    gallery.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 4000,
        fill: "forwards",
        easing: "ease",
      }
    )

  }
    
  return (
    <>
      <div className={styles.gallery} id="gallery" onMouseMove={handleMouseMove}>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1380.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG_1072.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1380.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1403.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1416.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1397.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1373.JPG"}
            width={200}
            height={300}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1372.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG-1374.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
        <div className={styles.tile}>
          <Image
            className={styles.image_tile}
            src={"/IMG_1071.JPG"}
            width={200}
            height={300}
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
