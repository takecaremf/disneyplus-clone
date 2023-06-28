import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Outlet />
    </div>
  );
}

export default App;
