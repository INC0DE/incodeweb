import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";

const ContactMk = () => {
  return (
    <div className="space-y-20 py-10">
      <div className="justify-self-center ">
        <h1 className="justify-self-center text-4xl text-gray font-serif">
          ¡Cotiza tu
        </h1>
        <h1 className="justify-self-center text-5xl font-serif md:text-7xl">
          paquete ideal!
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

export default ContactMk;
