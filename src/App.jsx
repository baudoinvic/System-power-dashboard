


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./Admin/Dash";
import Dashboard from "./Admin/Dashboard";
import Embassy from "./Admin/Embassy";
import Logistic from "./Admin/Logistic";
import Lab from "./Admin/Lab";
import Training from "./Admin/Training";
import Financial from "./Admin/Financial";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />{" "}
          {/* Added this route for / */}
          <Route path="/Admin/Dashboard" element={<Dashboard />}>
            <Route path="" element={<Dash />} />
            <Route path="embassy" element={<Embassy />} />
            <Route path="logistic" element={<Logistic />} />
            <Route path="lab" element={<Lab />} />
            <Route path="training" element={<Training />} />
            <Route path="finance" element={<Financial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
