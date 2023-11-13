import React from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Homes />} />
        <Route path = "/about" element={<About />} />
        {/* si jamain l'url ne correspond a rien  */}
        <Route path = "*" element={<Homes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
