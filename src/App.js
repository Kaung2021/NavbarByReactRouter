import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/report">
          <Report />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
};

export default App;
