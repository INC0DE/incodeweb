import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";
import { devideo } from "../../assets";
import ReactPlayer from "react-player";

const ContactDev = () => {
  return (
    <div className="space-y-20 py-10">
      <div className="max-h-full lg:h-92">
        <ReactPlayer
          url={devideo}
          className="react-player"
          width="100%"
          height="100%"
          loop
          playsinline
          muted
          volume={0}
          playing={true}
        />
      </div>
      <div className="flex flex-col items-center ">
        <motion.h1
          className="text-4xl text-gray font-serif"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Quieres tu
        </motion.h1>
        <motion.h1
          className="text-4xl font-serif md:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          página personalizada?
        </motion.h1>
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Card className="flex items-center w-64 h-72 p-10 sm:w-80">
          <FormAll />
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactDev;
