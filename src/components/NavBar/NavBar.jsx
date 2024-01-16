import { Link } from "react-router-dom";
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
        <Link to="/about">About me</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      {/* <div>
        <HamburgerMenu />
      </div> */}
    </div>
  );
}

