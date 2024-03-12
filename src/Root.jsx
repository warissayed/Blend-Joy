import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
