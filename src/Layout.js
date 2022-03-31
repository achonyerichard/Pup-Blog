import React from "react";
import Nav from "./AppBar/Nav";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
