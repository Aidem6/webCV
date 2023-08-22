import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from '../page.module.css';


export const Card = ( props ) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, y: 0,  transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: props.scrollDir === "up" ? 100 : -100 }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={ !props.button ? styles.card : 'p-0' }
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {props.children}
    </motion.div>
  );
};