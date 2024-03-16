import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import { Provider } from "react-redux";
import store from "./store/store";

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Outlet />
        <Footer />
        <MobileNav />
      </Provider>
    </>
  );
};

export default Root;
