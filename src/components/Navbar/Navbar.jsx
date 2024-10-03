import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  const navigate = useNavigate();
  let handleLogin = () => {
      navigate("/")
  }

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">lamabooking</span>
            <div className="navItems">
                <button className="navButton" onClick={handleLogin}>Register</button>
                <button className="navButton" onClick={handleLogin}>Login</button>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar;
