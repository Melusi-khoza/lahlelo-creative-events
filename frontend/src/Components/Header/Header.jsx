import "./Header.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import React, {useState} from "react";
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2

function Header() {

  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
  return (
    <>
      <header>
        <div className="header-container">
<<<<<<< HEAD
          <img className="company_logo" src="/Company_Logo.png"></img>
          <h3 className="motto">We Make Your Dream Event A Reality!😊❤️</h3>
          <button className="book-btn" onClick={() => navigate("/BookEventPlanner")}>
            <b>Book Event Planner</b>
          </button>
          <ul className="header-list">
=======
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
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
<<<<<<< HEAD
          </ul>
        </div>
      </header>
      <hr></hr>
=======
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
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
    </>
  )
}
export default Header;