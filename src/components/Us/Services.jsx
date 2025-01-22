import { Card, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { loop } from "../../assets";
import { AnimatedListDemo } from "./List";

const Services = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center bg-whitelight sm:h-60 py-5">
        <h1 className="justify-self-center text-3xl text-gray font-serif  sm:text-4xl">
          Nuestros
        </h1>
        <h1 className="justify-self-center text-5xl font-serif sm:text-7xl">
          servicios.
        </h1>
      </div>

      <div className="h-92">
        <ReactPlayer
          url={loop}
          className="react-player"
          width="100%"
          height="100%"
          controls={false}
          playsinline
          volume={0}
          muted
          loop
          playing={true}
        />
      </div>

      <div className="max-h-full grid h-96 grid-rows-4 grid-flow-col gap-3 py-10 px-3">
        <Card
          className="flex row-span-2  p-10 bg-gradient-to-r
         from-white
          via-gray-200
          to-gray-400
          justify-center
          md:row-span-2 col-span-2
          "
          isHoverable
        >
          <div className="">
            <h1 className="text-6xl">Desarrollo</h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Web.</h1>
          </div>
          <div className="self-end pt-3 pr-3">
            <Link to="/Website">
              <div className="w-32 h-12 bg-gold rounded-full pl-8 pt-3">
                <p className="self-center text-whitelight">Ver más.</p>
              </div>
            </Link>
          </div>
        </Card>

        <Card
          className="flex row-span-2 md:row-span-2 col-span-2 p-10 bg-gradient-to-r
         from-white
          via-gray-200
          to-gray-400
          justify-center
          "
          isHoverable
        >
          <div className="">
            <h1 className="text-6xl">Marketing</h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Digital.</h1>
          </div>
          <div className="self-end pt-3 pr-3">
            <Link to="/Marketing">
              <div className="w-32 h-12 bg-gold rounded-full pl-8 pt-3">
                <p className="self-center text-whitelight">Ver más.</p>
              </div>
            </Link>
          </div>
        </Card>

        <Card className="hidden md:block row-span-4 col-span-1 " isHoverable>
          <AnimatedListDemo />
        </Card>
      </div>
    </div>
  );
};

export default Services;
