import { Card, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const UXUI = () => {
  /**
   * ==============   Styles hide  ================
   */
  const container = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
  };

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
  };

  const button = {
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  };

  //Codigo de bg black//

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="grid max-h-full gap-5 lg:grid-cols-2 py-10 px-3">
      <Card
        className={`col-span-1 p-10 space-y-10 ${
          darkMode
            ? "bg-black text-white"
            : "bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black"
        }`}
      >
        <div className="self-center">
          <h1 className="text-7xl">UX</h1>
        </div>
        <div className="justify-items-center space-y-5">
          <h1 className="text-lg text-gold">
            (User Experience - Experiencia de Usuario)
          </h1>
          <p className="leading-relaxed xl:text-justify ">
            Se refiere a cómo un usuario interactúa y experimenta un producto,
            sitio web o aplicación. Hace que la experiencia sea intuitiva,
            fluida, agradable y satisfactoria. Enfoca aspectos como la
            accesibilidad, la usabilidad y la eficiencia en el flujo de tareas
            del usuario.
          </p>

          <div className="text-center">
            <Button
              onClick={toggleTheme}
              className={`py-2 px-4 mt-5 ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </Button>
          </div>
        </div>
      </Card>

      <Card
        className="col-span-1 p-10 space-y-10  bg-gradient-to-r
         from-white
          via-gray-200
          to-gray-400
          lg:bg-gradient-to-l
         from-white
          via-gray-200
          to-gray-400"
        isHoverable
      >
        <div className="self-center">
          <h1 className="text-7xl">UI</h1>
        </div>
        <div className="justify-items-center space-y-5">
          <h1 className="text-lg text-gold ">
            (User Interface - Interfaz de Usuario)
          </h1>
          <p className="leading-relaxed xl:text-justify">
            Es la parte visual y gráfica con la que el usuario interactúa
            directamente. Hace que el producto sea atractivo visualmente y
            consistente. Incluye elementos como botones, íconos, colores,
            tipografías, animaciones y diseño general.
          </p>

          <div className="justify-self-center" style={container}>
            <AnimatePresence initial={false}>
              {isVisible ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={box}
                  key="box"
                />
              ) : null}
            </AnimatePresence>
            <motion.button
              style={button}
              onClick={() => setIsVisible(!isVisible)}
              whileTap={{ y: 1 }}
            >
              {isVisible ? "Esconder" : "Mostrar"}
            </motion.button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UXUI;
