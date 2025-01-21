import { Image } from "@nextui-org/react";
import { socials } from "../constants";
import { incode } from ".././assets";

const Footer = () => {
  return (
    <div className="h-max-full max-w-full bg-white container flex sm:justify-between px-20 justify-center items-center gap-20 max-sm:flex-col">
      <Image
        src={incode}
        width={200}
      />
      <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()}. All rights reserved. Philippians 4:13.
      </p>

      <ul className="flex gap-5 flex-wrap">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="flex items-center justify-center w-10 h-24 bg-n-12 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={20} height={20} alt={item.title} />
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
