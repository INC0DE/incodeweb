import { Image } from "@nextui-org/react";
import { herodev } from "../../assets";
import { motion } from "framer-motion";

const HeroDev = () => {
  return (
    <div className="content-center max-h-screen w-full p-5 bg-white rounded-large sm:p-20 h-96 xl:flex">
      <motion.div
        className="self-center space-y-2 md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="sm:flex space-x-2">
          <h1 className="justify-center text-5xl sm:text-5xl">Website</h1>
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
            development
          </h1>
        </div>
        <h1 className="text-3xl text-gold sm:text-4xl">Service.</h1>
      </motion.div>

      <motion.div
        className="self-center justify-self-end mt-5 sm:w-80 lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image alt="Mac" src={herodev} width={1000} />
      </motion.div>
    </div>
  );
};

export default HeroDev;
