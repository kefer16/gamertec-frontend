import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Home } from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
