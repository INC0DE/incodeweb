import Hero from "../components/Marketing/Hero";
import Introduction from "../components/Marketing/Introduction";
import ManagerInfo from "../components/Marketing/ManagerInfo";
import WeDo from "../components/Marketing/WeDo";
import Digital from "../components/Marketing/Digital";
import Pack from "../components/Marketing/Pack";
import ContactMk from "../components/Marketing/ContactMk";

const Marketing = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <ManagerInfo />
      <WeDo/>
      <Digital/>
      <Pack/>
      <ContactMk/>
    </div>
  );
};

export default Marketing;
