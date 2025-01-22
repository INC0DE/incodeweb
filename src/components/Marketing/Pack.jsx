import { Card } from "@nextui-org/card";
import { motion } from "framer-motion";

const Pack = () => {
  return (
    <div className="max-h-full p-10 space-y-16 ">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="text-3xl text-gray font-serif md:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestros
        </motion.h1>

        <motion.h1
          className="text-5xl font-serif md:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Paquetes.
        </motion.h1>
      </div>

      <motion.div
        className="xl:flex gap-5 justify-center space-y-10 xl:space-y-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
      >
        <Card
          className="flex flex-col items-center justify-center p-6 xl:w-72 h-72 space-y-8"
          isHoverable
        >
          <div className="space-y-4 text-center">
            <h1 className="text-5xl">Business.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-6xl text-gold"> $2,999.</h1>
          </div>

          <div className="space-y-4 text-left">
            <ul className="list-disc pl-5">
              <li>Facebook | Instagram </li>
              <li>Inversión de $200. </li>
              <li>Post : Flyers / Storie 4. </li>
              <li>Video 2.</li>
            </ul>
          </div>
        </Card>

        <Card
          className="flex flex-col items-center justify-center p-6 xl:w-80 h-80 space-y-10"
          isHoverable
        >
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl">Business Black.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-7xl text-gold"> $7,999.</h1>
          </div>

          <div className="space-y-4 text-left">
            <ul className="list-disc pl-5">
              <li>Facebook | Instagram | Tiktok</li>
              <li>Inversión de $500. </li>
              <li>Post | Flyers/Stories 10</li>
              <li>Video 6.</li>
              <li>Recolección de contenido 2 días.</li>
            </ul>
          </div>
        </Card>

        <Card
          className="flex flex-col items-center justify-center p-6 xl:w-72 h-72 space-y-8"
          isHoverable
        >
          <div className="space-y-4 text-center">
            <h1 className="text-5xl">Business White.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-6xl text-gold"> $4,999.</h1>
          </div>

          <div className="space-y-4 text-left">
            <ul className="list-disc pl-5">
              <li>Facebook | Instagram | Tiktok</li>
              <li>Inversión de $300. </li>
              <li>Post | Flyers/Stories 6.</li>
              <li>Video 3.</li>
              <li>Recolección de contenido 1 día.</li>
            </ul>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Pack;
