import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import Header from "./components/Header";
import Us from "./pages/Us";
import Developer from "./pages/Developer";
import Marketing from "./pages/Marketing";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <>
      <Header />
      <div className="overflow-hidden ">
        <Wrapper>
          <Routes>
            <Route path="/" element={<Us />} />
            <Route path="/Website" element={<Developer />} />
            <Route path="/Marketing" element={<Marketing />} />
          </Routes>
        </Wrapper>
      </div>
      <div className="align-self-end">
        <Footer />
      </div>
    </>
  );
};

export default App;
