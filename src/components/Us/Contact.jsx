import { Card } from "@nextui-org/react";
import FormAll from "../FormAll";

const Contact = () => {
  return (
    <div className="space-y-20 py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-gray">¿Listo</h1>
        <h1 className="text-5xl sm:text-7xl">para empezar?</h1>
      </div>

      <div className="flex justify-center">
        <Card className="flex items-center w-64 h-72 p-10 sm:w-80">
          <FormAll />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
