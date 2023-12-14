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

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
        >
          <motion.header>
            <img
              src="./threejs.png"
              alt="logo"
              className="object-contain w-8 h-8"
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
