import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Us from "./pages/Us";
import Developer from "./pages/Developer";
import Marketing from "./pages/Marketing";
import Footer from "./components/Footer";

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

const App = () => {
  return (
    <>
      <Header />
      <div className="overflow-hidden ">
        <RouterProvider router={router} />;
      </div>
      <div className="align-self-end">
        <Footer />
      </div>
    </>
  );
};

export default App;
