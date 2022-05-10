import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App bg-base-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
