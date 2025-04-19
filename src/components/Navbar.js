import "./Navbar.css"
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <nav className="navbar">
        <div className="navbar__logo" style={{paddingLeft:50,cursor:"pointer"}} onClick={handleLogoClick}>Booking Clone</div>
        <ul className="navbar__links" >
            <li><button>List your hotel</button></li>
            <li><button>Sign Up</button></li>
            <li><button>Log In</button></li>
        </ul>
        </nav>
    );
    }
export default Navbar;