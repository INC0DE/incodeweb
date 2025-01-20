import { Image } from "@nextui-org/react";
import { handphone } from "../../assets";
import { MarqueeDemo } from "./Titles";

const Introduction = () => {
  return (
    <div className="max-h-full sm:h-96">
      <MarqueeDemo />
      <div className="justify-items-center md:flex h-2/3">
        <div className="hidden  md:block w-1/2 justify-items-center place-content-end">
          <Image src={handphone} width={400} />
        </div>
        <div className="w-full lg:w-1/2 px-5 content-start xl:p-20   ">
          <p className="text-left text-lg xl:text-justify">
            Gestionamos estrategias digitales para potenciar la venta y esencia
            de tu negocio a través de redes sociales. Creamos contenido único
            adaptado a las tendencias y al público, sin perder la identidad de
            la marca. Ofreciendo soluciones creativas en diseño visual,
            branding, marketing digital y contenido fotográfico y audiovisual.
            Nuestro objetivo es mejorar la interacción de los usuarios y ayudar
            a las marcas a destacar, combinando estética, funcionalidad y
            usabilidad para generar resultados reales
          </p>
          <div className="justify-items-center place-content-end md:hidden">
          <Image src={handphone} width={200} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
