import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Header/>
              <h1>This is homepage</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
