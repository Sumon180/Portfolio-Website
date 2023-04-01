import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const App = React.lazy(() => import("../App"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default router;
