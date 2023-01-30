import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllNews from "../pages/AllNews";
import Explore from "../pages/Explore";
import NewsDetails from "../pages/NewsDetails";
import SortNews from "../pages/SortNews";
import Home from "../pages/Home";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} /> <Route path="/" />
      <Route path="/explore" element={<Explore />} />
      <Route path="/news" element={<AllNews />} />
    </Routes>
  );
}

export default Routers;
