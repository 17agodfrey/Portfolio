import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import rocket from "../assets/rocket-solid.svg";
import fileIcon from "../assets/file-solid.svg";
import fileIconOrange from "../assets/file-solid-orange.svg";
import briefCaseIcon from "../assets/briefcase-solid.svg";
import briefCaseIconOrange from "../assets/briefcase-solid-orange.svg";
import usersIcon from "../assets/users-solid.svg";
import usersIconOrange from "../assets/users-solid-orange.svg";
import IconButton from "@mui/material/IconButton";
// import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem } from "@mui/material";

// import linkedinLogo from '../assets/navbar/linkedin-brands-solid.svg';
import LinkedinLogo from '../assets/navbar/linkedin-brands-solid.svg?react';
import EmailLogo from '../assets/navbar/envelope-solid.svg?react';
import GithubLogo from '../assets/navbar/github-brands-solid.svg?react';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleAccountButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavLinkClick = (link) => {
    setActiveNavLink(link);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/networking?query=${searchQuery}`);
    }
  };

  useEffect(() => {
    if (location.pathname.includes('/resume-list')) setActiveNavLink('/resume-list');
    else if (location.pathname.includes('/portfolio')) setActiveNavLink('/portfolio');
    else if (location.pathname.includes('/networking')) setActiveNavLink('/networking');
    else setActiveNavLink(null);
    setSearchQuery(''); 
  }, [location]);


  return (
    <>
      <nav id="navbar">
        {/* <Link to="/" id="logo_name">
          <img id="logo" src={rocket} alt="logo" />
          <h1 id="brand_name">Resume Rocket</h1>
        </Link> */}

        {/* <div id="nav_links">
          <Link to="/resume" className="nav_link" onClick={() => handleNavLinkClick('/resume')}>
            <img src={activeNavLink === '/resume' ? fileIconOrange : fileIcon} alt="resume" />
            <p>Resume</p>
          </Link>
          <Link to="/portfolio" className="nav_link" onClick={() => handleNavLinkClick('/portfolio')}>
            <img src={activeNavLink === '/portfolio' ? briefCaseIconOrange : briefCaseIcon} alt="portfolio" />
            <p>Portfolio</p>
          </Link>
          <Link to="/networking" className="nav_link" onClick={() => handleNavLinkClick('/networking')}>
            <img src={activeNavLink === '/networking' ? usersIconOrange : usersIcon} alt="networking" />
            <p>Networking</p>
          </Link>
        </div> */}

        <div className='nav-column'></div>
        <div id="nav-window-navigtaion" className='nav-column'>
            {/* <p>About</p>
            <p>Projects</p> */}
        </div>

        <div id="nav_links" className='nav-column'>
            <Link to="mailto:17agodfrey@gmail.com" className="nav_link" target="_blank" rel="noopener noreferrer">
                <EmailLogo className="nav-link-img" />
            </Link>
            <Link to="https://www.linkedin.com/in/austin-godfrey1560/" className="nav_link">
                <LinkedinLogo className="nav-link-img" />
            </Link>
            <Link to="https://github.com/17agodfrey" className="nav_link" target="_blank" rel="noopener noreferrer">
                <GithubLogo className="nav-link-img" />
            </Link>
        </div>
      </nav>
    </>
  );
}
