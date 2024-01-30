import { Link } from "react-scroll";
import { useState } from "react";
import "./NavBar.css";
import { SignalWifiStatusbarConnectedNoInternet4TwoTone } from "@mui/icons-material";
// import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"



export default function NavBar() {
  const [activeLink, setActiveLink] = useState('HomePage');
  const handleSetActiveLink = (to) => {
    setActiveLink(to);
    console.log(`Setting active link to: ${to}`);
  }
  return (
    <div className="NavBar">
      <div className="logo">
        <h2><Link to="/">Arsene Uzbekov</Link></h2>
        <div className="logo-img"></div>
      </div>
      <div className="navbar-links">
        <Link 
          to="HomePage" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('HomePage')}
        >
          Home
        </Link>
        <Link 
          to="About" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('About')}
        >
          About me
        </Link>
        <Link 
          to="Education" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('Education')}
        >
          Education
        </Link>
        <Link 
          to="Experience" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('Experience')}
        >
          Experience
        </Link>
        <Link 
          to="Articles" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('Articles')}
        >
          Articles
        </Link>
        <Link 
          to="Contacts" 
          smooth={true} 
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActiveLink('Contacts')}
        >
          Contacts
        </Link>
      </div>
      {/* <div>
        <HamburgerMenu />
      </div> */}
    </div>
  );
}

