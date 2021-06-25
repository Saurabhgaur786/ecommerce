import "./App.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  let loggedIn = false;
  const history = useHistory();

  return (
    <div className="main-head">
      <div className="header-navbar">
        <div className="logo">
          <img src="./img/pf.jpg" />
        </div>
        <div className="navbar">
          <div className="mycarts">Mycarts</div>
          <div className="mycarts">Dashboard</div>
          <div className="mycarts">Checkout</div>
        </div>

        {loggedIn ? (
          <div>
            <button onClick={() => history.push("/login")}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => history.push("/login")}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
