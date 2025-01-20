import  ReactDOM  from  "react-dom/client" ; 
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Us from "./pages/Us.jsx";
import Marketing from "./pages/Marketing.jsx";
import Developer from "./pages/Developer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NextUIProvider>
        <main>
          <App />
        </main>
      </NextUIProvider>
    </Router>
  </StrictMode>
);
