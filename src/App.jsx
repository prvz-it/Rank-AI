import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Consulting from "./pages/Consulting";
import AiCoach from "./pages/AiCoach";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route,} from "react-router";
import Layout from "./root/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/coach" element={<AiCoach />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
