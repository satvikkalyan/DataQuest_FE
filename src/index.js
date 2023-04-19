import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Contact from "./routes/contact/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles"; 
import LoginScreen from "./routes/login/LoginScreen";
import Register from "./routes/register/Register";
import Profile from "./routes/profile/Profile";
import Search from "./routes/search/Search";
import ModifyJobs from "./routes/admin/ModifyJobs";
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F6392", // Replace with your desired primary color
    },
    secondary: {
      main: "#008000", // Replace with your desired secondary color
    },
  },
});
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },      {
        path: "search",
        element: <Search />,
      },
      {
        path: "mod-jobs",
        element: <ModifyJobs/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router} />
  </ThemeProvider>

);
