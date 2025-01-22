import { motion } from "framer-motion";

const ManagerInfo = () => {
  return (
    <motion.div
      className="hidden md:flex h-60 p-5 bg-white items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-2/3 lg:w-1/2 px-5"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-justify">
          El community manager es el profesional encargado de gestionar y
          administrar las redes sociales de una marca o empresa. Nuestro labor
          incluye crear, planificar y publicar contenido, manteniendo una
          presencia activa en las plataformas digitales. Además, monitoreamos el
          rendimiento de las publicaciones, analizamos métricas y ajustamos las
          estrategias para mejorar el alcance, la imagen y la relación con los
          seguidores.
        </p>
      </motion.div>

      <motion.div
        className="w-1/3 lg:w-1/2 flex justify-end items-center"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <h1 className="text-5xl font-bold text-right lg:text-center">
          Community Manager.
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default ManagerInfo;
