import React from "react";

const ManagerInfo = () => {
  return (
    <div className="hidden md:flex h-60 p-5 bg-white">
      <div className="w-2/3 lg:w-1/2 px-5 content-center">
        <p className="text-justify">
          El community manager es el profesional encargado de gestionar y
          administrar las redes sociales de una marca o empresa. Nuestro labor
          incluye crear, planificar y publicar contenido, manteniendo una
          presencia activa en las plataformas digitales. Además, monitoreamos el
          rendimiento de las publicaciones, analizamos métricas y ajustamos las
          estrategias para mejorar el alcance, la imagen y la relación con los
          seguidores.
        </p>
      </div>
      <div className="w-1/3 lg:w-1/2 content-center ">
        <h1 className="text-5xl font-bold justify-self-end xl:justify-self-center">Community Manager.</h1>
      </div>
    </div>
  );
};

export default ManagerInfo;
