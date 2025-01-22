import { Card } from "@nextui-org/card";
import { motion } from "framer-motion";

const WeDo = () => {
  return (
    <div className="max-h-full bg-white space-y-10 py-10 px-5 lg:h-80 content-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <h1 className="text-gray">El puente entre la marca y audiencia.</h1>
        <h1 className="text-5xl text-gold md:text-6xl">¿Qué hacemos por ti?</h1>
      </motion.div>

      <motion.div
        className="max-h-full gap-5 grid lg:grid-cols-4 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
      >
        <Card
          className="justify-center items-center col-span-1 p-10 "
          isHoverable
        >
          <div className="flex space-x-8">
            <div className="self-center text-8xl text-gold ">1</div>
            <div>
              <h1 className="text-2xl">Manejo de redes sociales.</h1>
              <ul className="list-disc">
                <li> Programación de contenido.</li>
                <li> Publicación de contenido.</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card
          className="justify-center items-center col-span-1 p-10"
          isHoverable
        >
          <div className="flex space-x-8">
            <div className="self-center  text-8xl text-gold">2</div>
            <div>
              <h1 className="text-2xl">Estrategia del contenido.</h1>
              <ul className="list-disc">
                <li> Propuesta visual del contenido.</li>
                <li>Marketing digital y análisis de mercado.</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card
          className="justify-center items-center col-span-1 p-10"
          isHoverable
        >
          <div className="flex space-x-8">
            <div className="self-center text-8xl text-gold ">3</div>
            <div>
              <h1 className="text-2xl">Creador de diseño digital.</h1>
              <ul className="list-disc">
                <li> Diseño de creativo publicitario.</li>
                <li> | historias | flyers | reels | videos</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card
          className="justify-center items-center col-span-1 p-10"
          isHoverable
        >
          <div className="flex space-x-8">
            <div className="self-center  text-8xl text-gold ">4</div>
            <div>
              <h1 className="text-2xl">Creador Digital Fotográfico </h1>
              <ul className="list-disc">
                <li> Fotografías originales de producto y localidad.</li>
                <li>Toma audiovisual originales de producto y localidad.</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default WeDo;
