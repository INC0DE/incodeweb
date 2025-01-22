import { Card } from "@nextui-org/react";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";

const Thechnologies = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-56 bg-white">
        <h1 className="text-3xl text-gray font-serif md:text-4xl">Nuestras</h1>
        <h1 className="text-5xl font-serif md:text-7xl">Tecnologías.</h1>
      </div>

      <div className="grid max-h-full gap-5 lg:grid-cols-3 grid-rows-4 py-10 px-3">
        <Card
          className="flex col-span-1 row-span-4 p-8 hover:bg-gradient-to-t from-orange via-white to-white"
          isPressable
        >
          <div className="self-start">
            <h1 className="text-5xl text-gray  mb-5">HTML.</h1>
          </div>

          <div className="space-y-4">
            <p className="text-left xl:text-justify ">
              Es un lenguaje que utilizamos para crear y estructurar el
              contenido de las páginas web. Es la base de cualquier sitio web y
              se utiliza para definir elementos como:
            </p>
            <ul className="list-disc text-left pl-3">
              <li>
                Estructura general: Divide la página en secciones como
                encabezado, cuerpo y pie de página.
              </li>
              <li>Textos.</li>
              <li>Imágenes.</li>
              <li>Tablas y formularios.</li>
            </ul>
          </div>
          <div className="self-end">
            <IoLogoHtml5 className="w-24 h-20" />
          </div>
        </Card>

        <Card
          className="flex col-span-1 row-span-4 p-10 hover:bg-gradient-to-t from-yellow via-white to-white"
          isPressable
        >
          <div className="self-center">
            <h1 className="text-5xl mb-5 text-gray">JavaScript.</h1>
          </div>

          <div className="space-y-4">
            <p className="text-left xl:text-justify ">
              Lo utilizamos principalmente para agregar interactividad y
              dinamismo a las páginas web. Permite que los sitios web respondan
              a las acciones del usuario, como hacer clic, mover el ratón o
              rellenar formularios.
            </p>
            <ul className="list-disc text-left  pl-3">
              <li>Interactividad en páginas web.</li>
              <li>Respuestas en tiempo real.</li>
              <li>Aplicaciones más complejas.</li>
              <li>Backend.</li>
            </ul>
          </div>
          <div className="self-end">
            <IoLogoJavascript className="w-24 h-20" />
          </div>
        </Card>

        <Card
          className="col-span-1 row-span-4 p-10 hover:bg-gradient-to-t from-blue via-white to-white"
          isPressable
        >
          <div className="self-end">
            <h1 className="text-5xl mb-5 text-gray">CSS.</h1>
          </div>

          <div className="space-y-4">
            <p className="text-left xl:text-justify">
              Es un lenguaje de diseño que utilizamos para describir cómo se
              presentan y estilizan los elementos de una página web.
            </p>
            <ul className="list-disc text-left  pl-3">
              <li>Colores.</li>
              <li>Fuentes.</li>
              <li>Diseño.</li>
              <li>Animaciones y transiciones.</li>
            </ul>
          </div>
          <div className="self-end">
            <IoLogoCss3 className="w-24 h-20" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Thechnologies;
