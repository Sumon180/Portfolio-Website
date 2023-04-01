import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import LoaderrSpinner from "./pages/LoaderrSpinner";
import router from "./routes";

const routes: any = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoaderrSpinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);

