import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";  // Import your Header component
import FooterFixed from "./FooterFixed";  // Import your Footer component

const Layout = () => {
  return (
    <>
      <HeaderNav />  {/* Header will always be present */}
      <main className="main-content">
        <Outlet />  {/* This will render the page dynamically */}
      </main>
      <FooterFixed />  {/* Footer will always be present */}
    </>
  );
};

export default Layout;
