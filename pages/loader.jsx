import styles from "../styles/Loader.module.css";
import { useRef, useEffect } from "react";
import { timeline } from "motion";
import LogoAnimation from "../components/logoAnimation";

const Loader = () => {
  function getSectionHeight(element) {
    const { height } = element.getBoundingClientRect();
    const { childElementCount } = element;

    return height / childElementCount;
  }

  const countRef = useRef(null);
  const countRef2 = useRef(null);

  const loaderRef = useRef(null)

  useEffect(() => {
    if (countRef.current && countRef2.current) {
      const transformAmount = getSectionHeight(countRef.current);

      const sequence = new Array(3).fill("").flatMap((_, index) => [
        [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, { at: "-1.8"}],
      ]);

      timeline(sequence, {
        defaultOptions: {
          easing: [0.77, 0, 0.175, 1],
          duration: 2,
        },
      });
    }
  }, []);

  useEffect(() => {
    const sequence = [
        
        [countRef.current, { opacity: 0}, { at: "<"}],
        [countRef2.current, { opacity: 0}, { at: "<"}],
        [loaderRef.current, {y: '-100vh'}, {at: "-0.5"}],
    ];

    timeline(sequence, {
        defaultOptions: {
            easing: [0.77, 0, 0.175, 1],
            duration: 1,
            delay: 7
        }
    })
  }, [])
  return (
    <>
        <div className={styles.loader_container} ref={loaderRef}>
      <div className={styles.counter_container}>
        <ul className={styles.counter_list} ref={countRef}>
          <li>
            <h3>2</h3>
          </li>
          <li>
            <h3>4</h3>
          </li>
          <li>
            <h3>6</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>

      <div className={styles.counter_container}>
        <ul className={styles.counter_list} ref={countRef2}>
          <li>
            <h3>3</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
          <li>
            <h3>8</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>
    </div>

    <LogoAnimation/>
    </>
  );
};

export default Loader;
