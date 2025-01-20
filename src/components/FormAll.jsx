import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, Textarea } from "@nextui-org/react";

const FormAll = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c9bbkif", "template_83cfzjb", form.current, {
        publicKey: "zOrFRLhr_LVG9BBET",
      })
      .then(
        () => {
          setSuccess("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Form
        ref={form}
        onSubmit={sendEmail}
        className="w-60 max-w-80 flex flex-col gap-4 md:w-64"
        validationBehavior="native"
      >
        <Input
          isRequired
          className="max-w-xs"
          errorMessage="Please enter a valid username"
          label="Nombre."
          labelPlacement="outside"
          name="from_name"
          placeholder="Escribe tu nombre."
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Número."
          labelPlacement="outside"
          name="number"
          placeholder="Escribe tu número."
          type="tel"
        />

        <Textarea
          isRequired
          size="lg"
          errorMessage="Please enter a valid email"
          label="Descripción."
          labelPlacement="outside"
          name="message"
          placeholder="Describe tu negocio y tus intereses."
          type="text"
        />
        <div className="flex gap-2 self-center ">
          <Button color="primary" type="submit">
            Enviar
          </Button>
          <Button type="reset" variant="flat" value="Send">
            Borrar
          </Button>
        </div>
      </Form>
      {success && (
        <p className="text-green justify-self-center mt-5">¡Formulario enviado con éxito!</p>
      )}
    </div>
  );
};

export default FormAll;
