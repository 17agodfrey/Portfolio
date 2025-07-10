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

import Logo from '../assets/AG_logo-removebg.png'


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <>
      <nav id="navbar">
        <div className='nav-column' style={{display: 'flex', justifyContent: 'start', paddingLeft: '2rem'}}>
          <Link to="/" className="nav_link">
            <img src={Logo} alt="to home" className='nav-link-img' style={{width: '40px', height: '40px'}} />
          </Link>        
        </div>

        <div id="nav-window-navigtaion" className='nav-column'>
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
