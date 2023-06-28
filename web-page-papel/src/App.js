import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/General/Header";
import Inicio from "./Components/Inicio";
import Somos from "./Components/Somos";
import Proyectos from "./Components/Proyectos";
import Contactenos from "./Components/Contactenos";

const App = () => (
  <Router>
    <Header />
    <main className="container mt-5">
      <div className="jumbotron">
      <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/somos" element={<Somos/>} />
          <Route exact path="/contactenos" element={<Contactenos/>} />
          <Route exact path="/proyectos" element={<Proyectos/>} />
        </Routes>
      </div>
    </main>
  </Router>
)

export default App;
