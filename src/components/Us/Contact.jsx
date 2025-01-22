import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="space-y-20 py-20">
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-4xl text-gray"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Listo
        </motion.h1>
        <motion.h1
          className="text-5xl sm:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          para empezar?
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

export default Contact;

