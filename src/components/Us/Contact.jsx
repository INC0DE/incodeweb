import { useState } from "react";
import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";

const Contact = () => {
  return (
    <div className="space-y-20 py-10 align-middle">
      <div className="justify-self-center">
        <h1 className="text-4xl text-gray font-serif justify-self-center">
          ¿Listo
        </h1>
        <h1 className="text-5xl justify-self-center sm:text-7xl">
          para empezar?
        </h1>
      </div>

      <div className="justify-items-center">
        <Card className="w-64 h-72 p-10 items-center sm:w-80 ">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
