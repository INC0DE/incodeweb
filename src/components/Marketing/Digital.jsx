import { motion } from "framer-motion";
import { Card, Image } from "@nextui-org/react";
import { designcel, marketingvideo } from "../../assets";
import ReactPlayer from "react-player";

const Digital = () => {
  return (
    <div className="max-h-full">
      <motion.div
        className="max-h-full grid gap-3 grid-rows-4 grid-flow-col pt-10 pb-5 px-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
      >
        <Card
          className="hidden xl:block items-center justify-items-center row-span-4 col-span-1"
          isHoverable
        >
          <Image
            alt="DESIGNCEL"
            className=""
            src={designcel}
            width={900}
            height={600}
          />
        </Card>
        <Card
          className="flex row-span-2 col-span-2 p-10 bg-gradient-to-l
         from-white
          via-gray-200
          to-gray-400 "
          isHoverable
        >
          <div className="">
            <h1 className="text-4xl  text-gray font-bold sm:text-7xl">
              DIGITAL
            </h1>
          </div>
          <div className="">
            <h1 className="text-2xl sm:text-4xl">DESIGN CREATOR.</h1>
          </div>
          <div className="md:self-end pt-8 pr-3">
            <p className="text-sm text-left md:w-80 lg:text-lg xl:text-justify">
              Como diseñador digital, nos encargamos de crear el contenido
              visual como imágenes, videos y animaciones adaptados para
              plataformas sociales como Instagram, Facebook, etc. Buscamos
              captar la atención, transmitir mensaje de marca e impulsar la
              interacción, según tendencias y estrategias específicas.
            </p>
          </div>
        </Card>

        <Card
          className="flex row-span-2 col-span-2 p-10 bg-gradient-to-l
         from-white
          via-gray-200
          to-gray-400
          "
          isHoverable
        >
          <div className="">
            <h1 className="text-4xl text-gray font-bold sm:text-7xl">
              DIGITAL
            </h1>
          </div>
          <div className="">
            <h1 className="text-2xl sm:text-4xl">PHOTO CREATOR.</h1>
          </div>
          <div className="md:self-end pt-8 pr-3">
            <p className="text-sm text-left md:w-80 lg:text-lg xl:text-justify ">
              Como creador digital fotográfico para redes sociales nos
              especializamos en capturar y editar imágenes y videos atractivos,
              adaptándolos a las tendencias y características de cada
              plataforma. Aseguramos coherencia con la marca y buscamos
              maximizar la interacción e impacto visual en el público.
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="justify-self-center xl:hidden">
        <Image
          alt="DESIGNCEL"
          className="h-full"
          src={designcel}
          width={1000}
        />
      </div>

      <div className="h-92">
        <ReactPlayer
          url={marketingvideo}
          className="react-player"
          width="100%"
          height="100%"
          loop
          muted
          playsinline
          volume={0}
          playing={true}
        />
      </div>
    </div>
  );
};

export default Digital;
