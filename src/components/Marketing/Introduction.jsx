import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { handphone } from "../../assets";
import { MarqueeDemo } from "./Titles";

const Introduction = () => {
  return (
    <div className="max-h-full sm:h-96">
      <MarqueeDemo />
      <div className="flex flex-col md:flex-row h-2/3 items-center">
        <motion.div
          className="hidden md:flex md:w-1/2 justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <Image src={handphone} width={400} alt="Handphone" />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 px-5 xl:p-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <p className="text-left text-lg xl:text-justify">
            Gestionamos estrategias digitales para potenciar ventas y fortalecer
            la identidad de tu negocio en redes sociales. Creamos contenido
            único adaptado a tendencias, ofreciendo soluciones creativas en
            diseño visual, branding, marketing digital y contenido multimedia.
            Nuestro objetivo es mejorar la interacción del usuario, generando
            resultados tangibles con estética y funcionalidad.
          </p>

          <motion.div
            className="flex justify-center md:hidden mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            <Image src={handphone} width={200} alt="Handphone" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
