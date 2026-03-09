import { Link } from "react-router-dom";
import NotificationBell from "../NotificationBell/NotificationBell";
import "./AdminHeader.css";

function AdminHeader({ searchTerm, setSearchTerm }) {
  return (
    <>
      <header className="admin-header-container">
        <div className="header-main-section">
          <div className="logo-section">
            <img className="company_logo" src="/Company_Logo.png" alt="Logo" />
            <h3 className="motto">Turning Your Dream Event Into Reality!😊❤️</h3>
          </div>
          
          <div className="search-bar-wrapper">
             <input 
               type="text" 
               placeholder="Search bookings..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="search-input"
             />
          </div>
        </div>

        <div className="header-actions">
          <div className="noti-icon-wrapper">
             <NotificationBell />
          </div> 
          <Link to="/Logout" className="logout-link">
             <button className="logout-btn">Logout</button>
          </Link>
        </div>
      </header>
      <hr className="header-divider" />
    </>
  );
}

export default AdminHeader;