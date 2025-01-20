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
          loop
          muted
          volume={0}
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="justify-self-center ">
        <h1 className="text-2xl text-gray font-serif justify-self-center">
          ¿Quieres tu
        </h1>
        <h1 className="text-4xl font-serif justify-self-center md:text-7xl">
          página personalizada?
        </h1>
      </div>

      <div className="justify-items-center">
        <Card className="w-72 h-72 p-10 items-center sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default ContactDev;
