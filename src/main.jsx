import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout.jsx";
import Home from "./pages/Home.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import AuthLayout from "./AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Destinations from "./pages/Destinations.jsx";
import Planner from "./pages/Planner";
import Community from "./pages/Community";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Toaster } from "@/components/ui/sonner";
import DestinationDetail from "./pages/DestinationDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/destinations/:id",
        element: <DestinationDetail />,
      },

      {
        path: "/planner",
        element: <Planner />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </ThemeContextProvider>
  </StrictMode>
);
