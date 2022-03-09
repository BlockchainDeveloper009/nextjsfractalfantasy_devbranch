import React from "react";
import Footer from "./Footer";
import Nav from "./navbar";


// props
// destucturing

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}