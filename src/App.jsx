import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import TrendingPage from "./pages/TrendingPage";
import ShopPage from "./pages/ShopPage";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/Trending" element={<TrendingPage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
