import { Image} from "@nextui-org/react";
import { image1 } from "../../assets";

const Design = () => {
  return (
    <div className=" h-96 p-10 lg:flex">
      <div className="hidden self-center pr-10 lg:block w-1/2">
        <Image className="scale-100" src={image1} width="100%" />
      </div>

      <div className="content-center space-y-3 lg:w-1/2 ">
        <h1 className="text-6xl">Diseño</h1>
        <h1 className="font-bold text-5xl">Web.</h1>

        <p className="text-left text-lg  text-gray md:text-2xl xl:text-justify">
          Hacemos el proceso de planificación, conceptualización y creación de
          interfaces visuales y funcionales para sitios web o aplicaciones web.
          Incluye la organización de elementos como texto, imágenes, videos,
          botones y otros componentes en un diseño coherente y atractivo. El
          objetivo principal es garantizar que los usuarios puedan interactuar
          de manera efectiva.
        </p>
        <div className="self-center justify-self-center lg:hidden">
          <Image className="scale-100" src={image1} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Design;
