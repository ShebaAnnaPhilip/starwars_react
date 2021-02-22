import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from './containers/People';
import Planets from './containers/Planets';
import Starships from './containers/Starships';
import Home from './containers/Home';
import Header from './containers/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/people">
            <Header />
            <People />
          </Route>
          <Route path="/planets">
            <Header />
            <Planets />
          </Route>
          <Route path="/starships">
            <Header />
            <Starships />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
