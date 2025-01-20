import Marquee from "../ui/marquee";
import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const reviews = [
  {
    name: "React",
    username: "react",
    body: "Construye interfaces de usuario de forma eficiente.",
    icon: <FaReact />,
  },
  {
    name: "Tailwind",
    username: "tailwind",
    body: " Es rápido, flexible y ayuda a crear diseños consistentes",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "MySQL",
    username: "mysql",
    body: "Bases de datos relacional, de código abierto, que organiza y almacena datos",
    icon: <SiMysql />,
  },
  {
    name: "Motion",
    username: "motion",
    body: "Biblioteca de animaciones para React que facilita crear transiciones ",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "Next",
    username: "next",
    body: "Permite crear aplicaciones web rápidas y optimizadas",
    icon: <RiNextjsFill />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ icon, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white-950/[.1] bg-white-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-white-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="" width="32" height="32">
          {icon}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm ">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-"></div>
    </div>
  );
}
