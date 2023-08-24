import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from '../page.module.css';


export const Card = ( props ) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const cardVariant = {
    visible: { scale: 1, y: 0,  transition: { duration: 0.5 } },
    hidden: { scale: 0.9, y: props.scrollDir === "up" ? 100 : -100 }
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
      variants={cardVariant}
      initial="visible"
      animate={control}
    >
      {props.children}
    </motion.div>
  );
};