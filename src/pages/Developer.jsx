import Hero from "../components/Developer/Hero";
import Developtment from "../components/Developer/Developtment";
import { MarqueeDemo } from "../components/Developer/Iconsdev";
import Thechnologies from "../components/Developer/Thechnologies";
import Design from "../components/Developer/Design";
import UXUI from "../components/Developer/UXUI";
import ContactDev from "../components/Developer/ContactDev";

const Developer = () => {
  return (
    <div className="justify-items-center">
      <Hero />
      <Developtment />
      <Thechnologies />
      <MarqueeDemo />
      <Design />
      <UXUI />
      <ContactDev />
    </div>
  );
};

export default Developer;
