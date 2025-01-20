import { Card} from "@nextui-org/card";

const WeDo = () => {
  return (
    <div className="max-h-full space-y-10 py-10 px-5 lg:h-80 content-center">
      <div className="justify-items-center">
        <h1 className="text-gray">El puente entre la marca y audiencia.</h1>
        <h1 className="text-5xl text-gold md:text-6xl">¿Qué hacemos por ti?</h1>
      </div>

      <div className="max-h-full gap-5 grid lg:grid-cols-4 ">
        <Card className="col-span-1 p-10 justify-center items-center" isHoverable>
          <div className="flex space-x-5">
            <div className="text-8xl text-gold self-center ">1</div>
            <div>
              <h1 className="text-2xl">Manejo de redes sociales.</h1>
              <ul className="list-disc">
                <li> Programacion de Contenido</li>
                <li> Pubicacion de contenido</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 p-10 justify-center items-center" isHoverable>
          <div className="flex space-x-5">
            <div className="text-8xl text-gold self-center ">2</div>
            <div>
              <h1 className="text-2xl">Estrategia del contenido.</h1>
              <ul className="list-disc">
                <li> Propuesta visual del contenido.</li>
                <li>Marketing digital y análisis de mercado</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 p-10 justify-center items-center" isHoverable>
          <div className="flex space-x-5">
            <div className="text-8xl text-gold self-center ">3</div>
            <div>
              <h1 className="text-2xl">Creador de diseño digital.</h1>
              <ul className="list-disc">
                <li> Diseño de creativo publicitario.</li>
                <li> | historias | flyers | reels | videos</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 p-10 justify-center items-center" isHoverable>
          <div className="flex space-x-5">
            <div className="text-8xl text-gold self-center ">4</div>
            <div>
              <h1 className="text-2xl">Creador Digital Fotográfico </h1>
              <ul className="list-disc">
                <li> Fotografías originales de producto y localidad.</li>
                <li>Toma audiovisual originales de producto y localidad</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WeDo;
