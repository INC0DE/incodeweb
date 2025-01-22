import { Image } from "@nextui-org/react";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <div className="content-center h-96 w-full p-5 bg-white  rounded-large md:flex lg:p-10  ">
      <div className="self-center md:w-1/2">
        <h1 className="text-4xl font-medium mb-3 sm:text-6xl">
          El primer paso digital es con
          <a className="text-5xl ml-3 font-semibold sm:text-7xl">INCODE.</a>
        </h1>
        <p className="text-3xl text-end text-gold md:mr-10">
          Potenciando tu marca.
        </p>
      </div>
      <div className="self-center  md:self-end">
        <Image alt="Mac" src={hero} width={1000} />
      </div>
    </div>
  );
};

export default Hero;
