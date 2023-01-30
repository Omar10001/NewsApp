import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Info from "./components/Info";
import Routers from "./Routers/routers";

function App() {
  return (
    <div className="App bg-[#010100] relative md:w-[900px] h-full min-h-screen flex gap-4">
      <NavBar />
      <div className="ml-[55px] md:ml-[260px]">
        <Routers />
      </div>
    </div>
  );
}

export default App;
