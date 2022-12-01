import { motion } from "framer-motion";

const OutlineButton = (props) => {
  return <motion.button whileHover={{ scale: 1.06 }} className="outline-button">{props.title}</motion.button>;
};

export default OutlineButton;
