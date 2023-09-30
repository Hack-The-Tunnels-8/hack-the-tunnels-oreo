import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";
import image from '../../../public/logo2.png';

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src= {image } className="navbar_logo"/>
      <div className="navbar__logo">
        <Link to="/">Store Logo</Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className="navbutton" onClick={() => navigate("/sign-up") }>Sign Up</button>
            <button className = 'navbutton' onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
