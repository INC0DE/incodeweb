import { Card } from "@nextui-org/card";

const Pack = () => {
  return (
    <div className="max-h-full p-10 space-y-16">
      <div className="justify-items-center">
        <h1 className="text-4xl text-gray font-serif justify-self-center ">
          Nuestros
        </h1>
        <h1 className="text-6xl font-serif justify-self-center sm:text-7xl">
          paquetes.
        </h1>
      </div>

      <div className="space-y-10 justify-center xl:flex gap-5">
        <Card
          className=" justify-center self-center p-6 xl:w-72 h-72 space-y-8"
          isHoverable
        >
          <div className="justify-items-center space-y-4">
            <h1 className="text-5xl">Business.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-6xl text-gold"> $2,999.</h1>
          </div>

          <div className="justify-items-center space-y-4">
            <ul className="list-disc">
              <li>Facebook | Instagram </li>
              <li>Inversión de $200. </li>
              <li>Post : Flyers / Storie 4. </li>
              <li>Video 2.</li>
            </ul>
          </div>
        </Card>

        <Card
          className="justify-center p-6 xl:w-80 h-80 space-y-10 "
          isHoverable
        >
          <div className="justify-items-center space-y-4">
            <h1 className="text-5xl md:text-6xl">Business Black.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-7xl text-gold"> $7,999.</h1>
          </div>

          <div className="justify-items-center space-y-4">
            <ul className="list-disc">
              <li>Facebook | Instagram | Tiktok</li>
              <li>Inversión de $500. </li>
              <li>Post | Flyers/Stories 10</li>
              <li>Video 6.</li>
              <li>Recolección de contenido 2 días.</li>
            </ul>
          </div>
        </Card>

        <Card
          className="justify-center self-center p-6 space-y-8 xl:w-72 h-72"
          isHoverable
        >
          <div className="justify-items-center space-y-4">
            <h1 className="text-5xl">Business White.</h1>
            <h1 className="text-gray"> Mensual.</h1>
            <h1 className="text-6xl text-gold"> $4,999.</h1>
          </div>

          <div className="justify-items-center space-y-4">
            <ul className="list-disc">
              <li>Facebook | Instagram | Tiktok</li>
              <li>Inversión de $300. </li>
              <li>Post | Flyers/Stories 6.</li>
              <li>Video 3.</li>
              <li>Recolección de contenido 1 día.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pack;
