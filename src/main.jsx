import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, createHashRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Us from "./pages/Us.jsx";
import Marketing from "./pages/Marketing.jsx";
import Developer from "./pages/Developer.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Us />,
  },
  {
    path: "/Website",
    element: <Developer />,
  },
  {
    path: "/Marketing",
    element: <Marketing />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <NextUIProvider>
        <main>
          <App />
        </main>
      </NextUIProvider>
    </HashRouter>
  </StrictMode>
);
