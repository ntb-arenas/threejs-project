import { motion, AnimatePresence } from "framer-motion";
import { useSnaphot } from "valtio";

import state from "../store";
import {
  headContainerAnimation,
  headtContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return <AnimatePresence></AnimatePresence>;
};

export default Home;
