import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./Root/router";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 600 });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </StrictMode>
);
