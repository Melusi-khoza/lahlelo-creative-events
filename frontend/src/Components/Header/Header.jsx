import "./Header.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

function Header() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-section">
            <img className="company_logo" src="/Company_Logo.png"></img>
            <h3 className="motto">Turning Your Dream Event Into Reality!😊❤️</h3>
          </div>

          {/*Hamburger icon, Visible on small screens*/}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen )}>
            <div className={menuOpen ? "bar open" : "bar"}></div> 
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>           
          </div>

          <button className="book-btn" onClick={() => navigate("/BookEventPlanner")}>
            <b>Book Event Planner</b>
          </button>
         {/*} <ul className="header-list">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
          </ul>*/}

          <ul className={menuOpen ? "header-list active" : "header-list"}>
              <li><Link to="/Home" onClick={() => setMenuOpen(false) }>Home</Link></li>
              <li><Link to="/Services" onClick={() => setMenuOpen(false) }>Services</Link></li>
              <li><Link to="/About" onClick={() => setMenuOpen(false) }>About</Link></li>
              <li><Link to="/ContactUs" onClick={() => setMenuOpen(false) }>ContactUs</Link></li>
          </ul>

        </div>
      </header>
      {/* <hr></hr> */}
    </>
  )
}
export default Header;