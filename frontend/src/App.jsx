import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BookEventPlanner from "./Pages/BookEventPlanner/BookEventPlanner";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
<<<<<<< HEAD
=======
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Logout from "./Pages/LogOut/LogOut";
import Login from "./Pages/AdminLogin/AdminLogin";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
<<<<<<< HEAD
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/BookEventPlanner" element={<BookEventPlanner/>}/>
          <Route path="*" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
=======
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/BookEventPlanner" element={<BookEventPlanner />} />
          <Route path="*" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/AdminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/Logout" element={<Logout />} />
          <Route
            path="/AdminLogin"
            element={<Login setIsAuthenticated={() => {}} />}
          />
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
