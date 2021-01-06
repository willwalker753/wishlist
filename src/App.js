import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav';
import Link from './components/link';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Link />
    </div>
  );
}

export default App;
