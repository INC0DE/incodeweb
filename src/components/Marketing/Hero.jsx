import { Image } from "@nextui-org/react";
import { heromark } from "../../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="content-center max-h-screen w-full p-3 bg-white rounded-large sm:p-20 h-96 lg:flex">
      <motion.div
        className="self-center space-y-2 md:w-1/2 xl:justify-items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-x-2">
          <h1 className="justify-center text-5xl">Marketing</h1>
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
            digital
          </h1>
        </div>
        <h1 className="text-3xl text-gold sm:text-4xl">Service.</h1>
      </motion.div>

      <motion.div
        className="self-center justify-self-end sm:w-80 lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image alt="Mac" src={heromark} width={1000} />
      </motion.div>
    </div>
  );
};

export default Hero;
