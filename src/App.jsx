import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen bg-base-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
