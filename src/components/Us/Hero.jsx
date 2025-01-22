import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <div className="content-center h-96 w-full p-5 bg-white rounded-large md:flex lg:p-10">
      <motion.div
        className="self-center md:w-1/2"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
      >
        <h1 className="text-4xl font-medium mb-3 sm:text-6xl">
          El primer paso digital es con
          <a className="text-5xl ml-3 font-semibold sm:text-7xl">INCODE.</a>
        </h1>
        <p className="text-3xl text-end text-gold md:mr-10">
          Potenciando tu marca.
        </p>
      </motion.div>

      <motion.div
        className="self-center md:self-end"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
      >
        <Image alt="Mac" src={hero} width={1000} />
      </motion.div>
    </div>
  );
};

export default Hero;
