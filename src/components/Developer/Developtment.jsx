import { IconCloud } from "../ui/icon-cloud";
import { motion } from "framer-motion";

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
    <div className="flex flex-col xl:flex-row justify-between max-h-full p-10 lg:h-80">
      <motion.div
        className="flex flex-col justify-center space-y-5 xl:w-2/3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.h1
          className="text-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Desarrollo
        </motion.h1>

        <motion.h1
          className="font-bold text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web.
        </motion.h1>

        <motion.p
          className="text-lg max-h-54 text-gray sm:text-2xl xl:text-justify"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nos encargamos de diseñar, construir, implementar, mantener sitios y
          aplicaciones web para clientes, con el objetivo de crear soluciones en
          línea que sean funcionales, atractivas y efectivas, obteniendo un
          enfoque personalizado, un ahorro de tiempo y recursos para tu negocio,
          así como también una escalabilidad y soporte de página.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center rounded-2xl p-10 xl:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <IconCloud images={images} />
      </motion.div>
    </div>
  );
};

export default Design;
