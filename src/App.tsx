import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Career from "./pages/Career.tsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
