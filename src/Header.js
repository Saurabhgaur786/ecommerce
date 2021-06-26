import "./App.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./logic/actions/actions";

const Header = () => {
  // const [loggedIn, setloggedIn] = useState(false);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("login");
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div className="main-head">
      <div className="header-navbar">
        <div className="logo">
          <img src="./img/pf.jpg" />
        </div>
        <div className="navbar">
          <div className="mycarts" onClick={() => history.push("/")}>
            Products
          </div>
          <div className="mycarts">Carts</div>
          {/* <div className="mycarts">Checkout</div> */}
        </div>

        {loggedIn ? (
          <div>
            <button onClick={logoutUser}>Logout</button>
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
