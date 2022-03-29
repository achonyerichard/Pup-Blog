import React from "react";
import Nav from "./AppBar/Nav";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
