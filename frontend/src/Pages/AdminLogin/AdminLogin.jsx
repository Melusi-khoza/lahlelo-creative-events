import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch("https://lahlelo-events-backend.onrender.com/bookings", {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      if (response.ok) {
        localStorage.setItem("auth", credentials);
        if(!localStorage.getItem("lastCheck")) { 
          localStorage.setItem("lastCheck", new Date().toISOString()); // Initialize notification tracking
        }
        setIsAuthenticated(true);
        setError("");
        navigate("/AdminDashboard");// Only navigate after successful login

      } else if (response.status === 401) {
        setError("Invalid username or password");
      }else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Server not reachable. Please try again later.");
    }
  };

  return (

    <div className="admin-login-container" >
      <h2>Admin <span>Login</span></h2>
      <div className="login-form">
          <form onSubmit={handleLogin} >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              
            />
            
            <button type="submit">Login</button>

            {error && <p style={{ color: "red" }}>{error}</p>} 
          </form>
      </div>
    </div>
  

  );
}
