import { useRef } from "react";
import BannerImage from "./Images/banner.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Travel from "./Images/travel.jpg";

export default function Banner() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  function Banner1() {
    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
    return (
      <motion.div className="hidden md:flex h-[88vh]">
        <motion.img
          src={BannerImage}
          alt="banner"
          className="h-full w-[100%]"
          style={{ opacity, scale }}
        />
      </motion.div>
    );
  }

  function Banner2() {
    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 2]);

    return (
      <motion.div
        className="hidden md:flex sticky top-[25vh] h-[50vh] w-[50%] bg-gray-200 mx-auto mt-[20px] flex flex-col justify-center items-center"
        style={{ scale, opacity }}
      >
        <img
          src={Travel}
          className="absolute top-0 h-full w-[100%]"
          alt="travel"
        />

        <div className="absolute pb-11  text-white px-7">
          <h1 className=" text-center text-[20px] font-bold">
            Never stop Exploring
          </h1>
          <p className=" text-center text-[14px]">
            Connect with us and explore the best places in the world.
          </p>
        </div>
      </motion.div>
    );
  }

  // For smaller screens
  function Banner3() {
    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

    return (
      <motion.div
        className="md:hidden sticky top-[0px] h-[100vh] w-[100%] bg-gray-200 mx-auto  flex flex-col justify-center items-center"
        style={{ scale, opacity }}
      >
        <img
          src={Travel}
          className="absolute top-0 h-full w-[100%]"
          alt="travel"
        />

        <div className="absolute pb-11  text-white px-7">
          <h1 className=" text-center text-[30px] font-bold">
            Never stop Exploring
          </h1>
          <p className=" text-center text-[24px]">
            Connect with us and explore the best places in the world.
          </p>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div className="relative h-[180vh]" ref={targetRef}>
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </motion.div>
  );
}
