import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";
import { motion } from "framer-motion";

const ContactMk = () => {
  return (
    <div className="space-y-20 py-10">
      <div className="flex flex-col items-center">
        <motion.h1
          className="justify-self-center text-4xl text-gray font-serif"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Cotiza tu
        </motion.h1>
        <motion.h1
          className="justify-self-center text-5xl font-serif md:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          paquete ideal!
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

export default ContactMk;
