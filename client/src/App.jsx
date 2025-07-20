import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PlayerForm from "./components/PlayerForm";
import AdminView from "./components/AdminView";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Player Form</Link>
          <Link className="nav-link text-light" to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<PlayerForm />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default App;
