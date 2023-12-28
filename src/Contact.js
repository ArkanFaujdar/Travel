import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="grid gap-x-px md:grid-cols-2 md:py-[125px] py-[65px] w-full bg-black text-white mx-auto px-5 md:px-8 overflow-hidden"
      inltial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="m-auto md:mb-auto">
        <motion.h1
          className="sm:text-2xl md:text-3xl pb-1 font-extrabold"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Want to get great deals and offers?
        </motion.h1>
        <motion.h2
          className="mb-5 md:mb-11 text-center text-[18px]"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Sign up and stay updated
        </motion.h2>
      </div>

      <motion.div
        className="m-auto grid grid-col-2 w-[60%]"
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-8 m-auto grid md:flex w-full">
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-[5px] text-center md:text-left md:pl-5 mb-1 md:mb-0 py-3 md:w-3/4"
          ></input>
          <button className="bg-green-300 md:w-1/4 text-white rounded-[5px] py-3 md:ml-1">
            Notify me
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
