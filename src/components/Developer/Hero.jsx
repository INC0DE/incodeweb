import { Image } from "@nextui-org/react";
import { herodev } from "../../assets";

const HeroDev = () => {
  return (
    <div className="max-h-screen w-full p-5 bg-white content-center rounded-large sm:p-20 h-96 xl:flex">
      <div className="self-center space-y-2 md:w-1/2 ">
        <div className="sm:flex space-x-2 ">
          <h1 className="justify-center text-5xl sm:text-5xl">Website</h1>
          <h1 className=" text-5xl font-bold sm:text-6xl md:text-7xl">
            development
          </h1>
        </div>
        <h1 className="text-3xl text-gold sm:text-4xl">Service.</h1>
      </div>
      <div className="self-center mt-5 justify-self-end sm:w-80 lg:w-1/2">
        <Image alt="Mac" src={herodev} width={1000} />
      </div>
    </div>
  );
};

export default HeroDev;
