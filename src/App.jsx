import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './components/Auth'
import AdminLayout from './components/AdminLayout'
import UserAdmin from './components/UserAdmin'
import Dashboard from "./components/Dashboard"
import UserForm from "./components/UserForm"

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
    console.log("Initial isLoggedIn from localStorage:", localStorage.getItem("isLoggedIn")===true);
		return localStorage.getItem("isLoggedIn") === "true"? true : false;
	});

	// Handler to update both React state and localStorage
	const handleSetIsLoggedIn = (status) => {
		setIsLoggedIn(status);
		localStorage.setItem("isLoggedIn", status);
	};

	// Optional: Function to handle logout
	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem("isLoggedIn");
	};

  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/admin" replace /> : <Auth handleSetIsLoggedIn={handleSetIsLoggedIn} />} 
        />
        
        {/* Nested Admin routes */}
        <Route path="/admin" element={isLoggedIn ? <AdminLayout /> : <Navigate to="/" replace />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<UserAdmin />} />
          <Route path="user/add" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
