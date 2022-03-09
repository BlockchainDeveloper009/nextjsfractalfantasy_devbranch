import React from "react";
import Footer from "./Footer";
import Nav from "./Navbar";


// props
// destucturing

export default function Layout({children}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}