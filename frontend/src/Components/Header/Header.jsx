import "./Header.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="header-container">
          <img className="company_logo" src="/Company_Logo.png"></img>
          <h3 className="motto">We Make Your Dream Event A Reality!😊❤️</h3>
          <button className="book-btn" onClick={() => navigate("/BookEventPlanner")}>
            <b>Book Event Planner</b>
          </button>
          <ul className="header-list">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
          </ul>
        </div>
      </header>
      <hr></hr>
    </>
  )
}
export default Header;