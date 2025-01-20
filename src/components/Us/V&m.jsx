import { incodefull } from "../../assets";
import { Image } from "@nextui-org/react";

const Vissionmission = () => {
  return (
    <div className="sm:justify-items-center space-y-5 py-20 px-20">
      <h1 className="text-3xl font-sans text-gold">Misión y Visión.</h1>
      <p className="w-1/2 text-center">
        Como empresa, crear autenticidad y posicionarnos como los mejores en la
        industria o sector será nuestro principal deber. Centrarnos fielmente en
        la esencia de tu negocio llevará a tu marca al siguiente nivel,
        entregando proyectos de excelencia gracias a nuestro equipo de expertos.
      </p>
      <Image alt="Incode" src={incodefull} width={200} />
    </div>
  );
};

export default Vissionmission;
