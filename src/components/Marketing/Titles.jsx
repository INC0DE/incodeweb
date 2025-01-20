import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Creador Digital.",
    username: "react",
  },
  {
    name: "Community Manager.",
    username: "tailwind",
  },
  {
    name: "Creador de Diseño.",
    username: "mysql",
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ icon, name, username, body }) => {
  return (
    <div className="p-10 md:p-20">
      <h1 className="text-5xl text-gray font-bold"> {name}</h1>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[267px] w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
}
