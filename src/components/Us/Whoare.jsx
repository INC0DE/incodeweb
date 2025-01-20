import { photohero } from "../../assets";
import { Image } from "@nextui-org/react";

const Whoare = () => {
  return (
    <div className="max-h-full md:flex min-h-96">
      <div className="self-end hidden w-1/2 lg:block">
        <Image src={photohero} width={650} height={600} />
      </div>

      <div className="content-center space-y-20 p-5 lg:w-2/3 pr-5">
        <div>
          <h1 className="mb-3 text-4xl md:text-6xl ">¿Quiénes somos?</h1>
          <p className=" text-gray text-lg">
            Somos una empresa tecnológica enfocada en gestionar los productos
            digitales para tu negocio. Especializándonos en crear páginas web
            personalizadas y desarrolladas en código, así como, enfocar
            estrategias de creación de contenido digital para redes sociales.
          </p>
        </div>
        <div>
          <h1 className="mb-3 text-right text-3xl md:text-4xl ">
            Creando proyectos exitosos.
          </h1>
          <p className=" text-gray text-right text-lg">
            El éxito digital es nuestra prioridad, el enfoque en un marketing
            estratégico, gestión escalable y diseño funcional nos ayuda a
            potenciar tu marca, aumentando visibilidad y fortaleciendo el
            alcance. Alineándonos a las necesidades del negocio y consumidor
            llevando tu negocio al siguiente nivel.
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-3 md:text-4xl ">Creando conexiones.</h1>
          <p className=" text-gray">
            Consideramos que generar confianza e interés en el público es el
            enfoque más relevante para atraer audiencia. Cada proyecto que
            tomamos es una oportunidad para transformar tu idea en experiencia
            digital e innovar juntos las mejores soluciones creativas y
            tecnológicas.
          </p>
        </div>
        <div className="self-end justify-self-center w-2/2 lg:hidden">
          <Image src={photohero} width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default Whoare;
