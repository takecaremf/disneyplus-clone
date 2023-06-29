import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Errorpage from "./pages/Errorpage";
import ShopPage from "./pages/ShopPage";
import TrendingPage from "./pages/TrendingPage";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
