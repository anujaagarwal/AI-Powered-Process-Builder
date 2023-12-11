import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import AiAssisted from "../src/pages/AiAssisted";
import ManualDefinition from "../src/pages/ManualDefinition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ai-assisted",
    element: <AiAssisted />,
  },
  {
    path: "/manual-definition",
    element: <ManualDefinition />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
