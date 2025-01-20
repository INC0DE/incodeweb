import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Us from "./pages/Us";
import Developer from "./pages/Developer";
import Marketing from "./pages/Marketing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <div className="overflow-hidden ">
        <Routes>
          <Route path="/" element={<Us />} />
          <Route path="/Website" element={<Developer />} />
          <Route path="/Marketing" element={<Marketing />} />
        </Routes>
      </div>
      <div className="align-self-end">
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
