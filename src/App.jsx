import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import HomePage from "./pages/homePage/homePage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;