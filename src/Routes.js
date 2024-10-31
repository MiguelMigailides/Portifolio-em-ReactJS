import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, useAnimate } from "framer-motion";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Perfil from "./pages/Perfil";

export default () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </AnimatePresence>
  );
};
