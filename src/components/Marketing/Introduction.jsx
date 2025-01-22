import { Image } from "@nextui-org/react";
import { handphone } from "../../assets";
import { MarqueeDemo } from "./Titles";

const Introduction = () => {
  return (
    <div className="max-h-full sm:h-96">
      <MarqueeDemo />
      <div className="flex flex-col md:flex-row h-2/3 items-center">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <Image src={handphone} width={400} alt="Handphone" />
        </div>
        <div className="w-full lg:w-1/2 px-5 xl:p-20">
          <p className="text-left text-lg xl:text-justify">
            Gestionamos estrategias digitales para potenciar la venta y esencia
            de tu negocio a través de redes sociales. Creamos contenido único
            adaptado a las tendencias y al público, sin perder la identidad de
            la marca. Ofrecemos soluciones creativas en diseño visual, branding,
            marketing digital y contenido fotográfico y audiovisual. Nuestro
            objetivo es mejorar la interacción de los usuarios y ayudar a las
            marcas a destacar, combinando estética, funcionalidad y usabilidad
            para generar resultados reales.
          </p>
          <div className="flex justify-center md:hidden mt-5">
            <Image src={handphone} width={200} alt="Handphone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
