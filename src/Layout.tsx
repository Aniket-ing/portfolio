import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This renders the current route's component */}
    </div>
  );
};

export default Layout;
