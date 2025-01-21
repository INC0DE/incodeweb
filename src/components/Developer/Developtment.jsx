import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Design = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="justify-center max-h-full  p-10 lg:h-80 xl:flex">
      <div className="content-center space-y-5  xl:w-2/3 ">
        <h1 className="text-6xl">Desarrollo</h1>
        <h1 className="font-bold text-5xl">Web.</h1>

        <p className="text-lg max-h-54 text-gray sm:text-2xl xl:text-justify">
          Nos encargamos de diseñar, construir, implementar, mantener sitios y
          aplicaciones web para clientes, con el objetivo de crear soluciones en
          línea que sean funcionales, atractivas y efectivas, obteniendo un
          enfoque personalizado, un ahorro de tiempo y recursos para tu negocio,
          así como también una escalabilidad y soporte de página.
        </p>
      </div>
      <div className="self-center justify-self-center rounded-2xl p-10 xl:w-1/2 justify-items-end ">
        <IconCloud images={images} />
      </div>
    </div>
  );
};

export default Design;
