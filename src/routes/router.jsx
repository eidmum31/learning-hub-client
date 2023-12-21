import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "../pages/shared/Header/Header";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
    },
  ]);
  export default router;