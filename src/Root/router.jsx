import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ViewDetails from "../Components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/viewDetails/:id",
    element: <ViewDetails></ViewDetails>,
    loader: () => fetch("/project.json"),
  },
]);
export default router;
