import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "./Layout";
import { About } from "../pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
