import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav';
import Link from './components/link';
import Signup from './components/signup';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Nav />
          <Link />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
