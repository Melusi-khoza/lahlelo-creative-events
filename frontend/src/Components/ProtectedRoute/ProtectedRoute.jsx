import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(() => {
    const credentials = localStorage.getItem("auth");
    return !!credentials;
  });

  useEffect(() => {
    const credentials = localStorage.getItem("auth");

    fetch("https://lahlelo-events-backend.onrender.com/bookings", {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setIsValid(true);
        } else {
          localStorage.removeItem("auth");
          setIsValid(false);
        }
      })
      .catch(() => {
        setIsValid(false);
      });
  }, []);

  if (isValid === null) return <p>Checking authentication...</p>;

  if (!isValid) return <Navigate to="/AdminLogin" />;

  return children;
}
