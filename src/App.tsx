import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import FileUpload from "./containers/fileUpload";
import { Report } from "./components/report";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/report">Reporte</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/">
              <FileUpload />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
