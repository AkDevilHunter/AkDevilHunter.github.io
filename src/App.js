import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.js";

function App() {
  return (
    <div>
  <Router>
  <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    
    </Router>
    </div>

  );
}

export default App;
