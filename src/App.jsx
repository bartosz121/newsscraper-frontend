import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
