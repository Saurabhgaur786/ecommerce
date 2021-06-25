import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
