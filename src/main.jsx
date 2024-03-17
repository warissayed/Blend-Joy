import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Root from "./Root.jsx";
import Shakes from "./components/pages/Shakes.jsx";
import Cart from "./components/pages/Cart.jsx";
import Hero from "./components/pages/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 not found</div>,
    children: [
      { path: "", element: <Hero /> },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Shakes",
        element: <Shakes />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
