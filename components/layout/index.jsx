import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ blog, children }) => {
  return (
    <div className={`relative overflow-hidden`}>
      <Header></Header>
      <div className="">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
