import { useState } from "react";
import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";
import { devideo } from "../../assets";
import ReactPlayer from "react-player";

const ContactDev = () => {
  return (
    <div className="space-y-20 py-10">
      <div className="max-h-full lg:h-92">
        <ReactPlayer
          url={devideo}
          className="react-player"
          width="100%"
          height="100%"
          loop
          playsinline
          muted
          volume={0}
          playing={true}
        />
      </div>
      <div className="justify-self-center ">
        <h1 className="justify-self-center text-4xl text-gray font-serif">
          ¿Quieres tu
        </h1>
        <h1 className="justify-self-center text-4xl font-serif md:text-7xl">
          página personalizada?
        </h1>
      </div>

      <div className="justify-items-center">
        <Card className="items-center w-64 h-72 p-10 sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default ContactDev;
