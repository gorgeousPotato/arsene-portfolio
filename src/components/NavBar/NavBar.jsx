import { Link } from "react-scroll";
import "./NavBar.css";
// import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"



export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <h2><Link to="/">Arsene Uzbekov</Link></h2>
        <div className="logo-img"></div>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="About" smooth={true} duration={500}>About me</Link>
        <Link to="Education" smooth={true} duration={500}>Education</Link>
        <Link to="Experience" smooth={true} duration={500}>Experience</Link>
        <Link to="Articles" smooth={true} duration={500}>Articles</Link>
        <Link to="Contacts" smooth={true} duration={500}>Contacts</Link>
      </div>
      {/* <div>
        <HamburgerMenu />
      </div> */}
    </div>
  );
}

