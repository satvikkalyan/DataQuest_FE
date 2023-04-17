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
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme from Material-UI
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router} />
  </ThemeProvider>

);
