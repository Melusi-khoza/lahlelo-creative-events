import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear stored login info
    localStorage.removeItem("auth");

    // Redirect to login page
    setTimeout(() => {
      navigate("/AdminLogin");
    }, 1500);

  }, [navigate]);

  return (
    <div className="logout-page">
      <h2>You have been logged out successfully.</h2>
      <p>Redirecting to login page...</p>
    </div>
  );
}

export default Logout;