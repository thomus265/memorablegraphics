import styles from "../styles/Home.module.css";
import Featured from "../components/featured";
import Banner from "./banner";
import { useRef, useEffect } from "react";
import Loader from "./loader";
import CTA from "../components/cta";

export default function Home() {
  const scrollRef = useRef();

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }

  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: scrollRef.current,
  //       smooth: true
  //     });
  //   });

  //   return () =>{};
  // }, []);

  return (
    <div className={styles.home} ref={scrollRef}>
      <Banner/>
      <Featured/>
      <CTA/>
    </div>
  );
}
