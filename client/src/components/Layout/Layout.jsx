import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
      <h1>layout</h1>
    </div>
  );
};

export default Layout;