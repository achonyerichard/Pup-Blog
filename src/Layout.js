import React from "react";
import Nav from "./AppBar/Nav";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
