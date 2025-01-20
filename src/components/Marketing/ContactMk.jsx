import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";

const ContactMk = () => {
  return (
    <div className="space-y-20 py-10">
      <div className="justify-self-center ">
        <h1 className="text-4xl text-gray font-serif justify-self-center">
          ¡Cotiza tu
        </h1>
        <h1 className="text-5xl font-serif justify-self-center  md:text-7xl">
          paquete ideal!
        </h1>
      </div>

      <div className="justify-items-center">
        <Card className="w-64 h-72 p-10 items-center sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default ContactMk;
