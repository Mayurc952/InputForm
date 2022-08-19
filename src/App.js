import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Summery from "./component/Summery.js";
import Header from "./component/Header";
import MultiProb from "./component/MultiProb";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home setData={setData} />} />
          <Route path="/summery" element={<Summery data={data} />} />
          <Route path="/multiprob" element={<MultiProb />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
