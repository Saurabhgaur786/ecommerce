import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./logic/actions/actions";
import Login from "./Login";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    const checkToken = async () => {
      const authToken = localStorage.getItem("login");
      if (authToken) {
        let token = true;
        localStorage.setItem("login", true);
        dispatch(login({ username: "" }));
      }
    };
    checkToken();
  }, [loggedIn]);

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
