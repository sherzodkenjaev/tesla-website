import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeslaModelS from "./components/TeslaModelS";
import TeslaModel3 from "./components/TeslaModel3";
import TeslaModelX from "./components/TeslaModelX";
import TeslaModelY from "./components/TeslaModelY";
import SolarRoof from "./components/SolarRoof";
import SolarPanels from "./components/SolarPanels";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/model-s">
            <Header />
            <TeslaModelS />
          </Route>
          <Route path="/model-3">
            <Header />
            <TeslaModel3 />
          </Route>
          <Route path="/model-x">
            <Header />
            <TeslaModelX />
          </Route>
          <Route path="/model-y">
            <Header />
            <TeslaModelY />
          </Route>
          <Route path="/solar-roof">
            <Header />
            <SolarRoof />
          </Route>
          <Route path="/solar-panel">
            <Header />
            <SolarPanels />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
