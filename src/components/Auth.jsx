import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { BiLogIn, BiUser, BiLockAlt } from "react-icons/bi";




export default function Auth({ handleSetIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Set authentication state and redirect to admin dashboard
    handleSetIsLoggedIn(true);
    navigate("/admin");
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="card border-0 shadow-lg rounded-4 style-card" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-4 p-sm-5">
          <div className="text-center mb-4">
            <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
              <BiLogIn size={30} />
            </div>
            <h3 className="fw-bold text-dark m-0">Welcome Back</h3>
            <p className="text-muted small mt-1">Please enter your details to sign in</p>
          </div>

          <form onSubmit={loginUser}>
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">Username</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <BiUser size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="form-control bg-light border-start-0 ps-0"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <BiLockAlt size={18} />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="form-control bg-light border-start-0 ps-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2">
              <BiLogIn size={20} /> Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

