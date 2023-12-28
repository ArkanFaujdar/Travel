import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Maldives from "./Images/maldives.jpg";
import Paris from "./Images/paris.jpg";
import Greece from "./Images/greeece.jpg";
import Italy from "./Images/italy.jpg";

function Pack({ country, img, type }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2],
    type === "right" ? [1000, 0] : [-1000, 0]
  );

  return (
    <motion.div
      className="h-[70vh] mb-5 grid grid-cols-2"
      style={{ x }}
      ref={targetRef}
    >
      <img src={img} className="h-[65vh] w-[100%]" alt="maldives" />
      <div className="p-3 my-auto pb-11 px-[45px]">
        <h1 className="text-[35px] font-bold text-gray-500">{country}</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>

        <motion.button className="mt-8 py-4 px-11 text-[18px] rounded-xl bg-slate-200">
          Check Out
        </motion.button>
      </div>
    </motion.div>
  );
}

function Packs() {
  return (
    <motion.div className="mt-6 relative h-[320vh] mb-11 p-10 max-w-screen overflow-hidden">
      <motion.h1
        className="text-center mb-11 mx-auto text-[35px] font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Our Best Packages
      </motion.h1>

      <Pack country="Paris" img={Paris} type="left" />
      <Pack country="Italy" img={Italy} type="right" />
      <Pack country="Maldives" img={Maldives} type="left" />
      <Pack country="Greece" img={Greece} type="right" />
    </motion.div>
  );
}

export default Packs;
