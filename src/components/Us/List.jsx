import { cn } from "@/lib/utils";
import { AnimatedList } from "../ui/animated-list";

let notifications = [
  {
    name: "Carlos Aviles.",
    description:
      "INCODE excelente empresa, se preocupo por hacer crecer mi marca de manera significativa.",
    time: "15m ago",
    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "Marco Antonio.",
    description: "¡Totalmente recomendado por su enfoque estratégico!",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Eve Lopez.",
    description:
      "Estoy muy satisfecho con INCODE. Mi negocio ha escalado de forma impresionante.",
    time: "5m ago",
    icon: "👤",
    color: "#FF3D71",
  },
  {
    name: "Martha Patricia.",
    description:
      "Mejoro las estadísticas de mi negocio.¡5 estrellas sin dudarlo!",
    time: "2m ago",
    icon: "👤",
    color: "#1E86FF",
  },
  {
    name: "Jesus Diaz.",
    description:
      "El trabajo con INCODE es confiable, entiende cómo optimizar las ventas.",
    time: "2hr ago",
    icon: "👤",
    color: "#1E86",
  },
  {
    name: "Alan Lopez.",
    description: " ¡Altamente recomendable por su profesionalismo!",
    time: "1hr ago",
    icon: "👤",
    color: "#1E86FF",
  },
  {
    name: "Joanna Sanchez.",
    description:
      "Con INCODE vimos un aumento claro en nuestras ventas. Su dedicación a mi marca fue inigualable.",
    time: "50m ago",
    icon: "👤",
    color: "#1E86FF",
  },
  {
    name: "Camila Pacheco.",
    description:
      "Su trabajo realmente marca la diferencia. ¡Sin duda una de las mejores opciones!ƒ",
    time: "30m ago",
    icon: "👤",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm text-gold sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col p-6 overflow-hidden rounded-lg  bg-white md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
