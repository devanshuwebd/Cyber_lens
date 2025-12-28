import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
    {!open && (<button className="hamburger" onClick={toggleSidebar}>☰</button>)}

    <nav className={`sidebar ${open ? "open" : ""}`}>
        <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        onClick={() => setOpen(false)} // close sidebar on click
        >Home</NavLink>

        <NavLink 
        to="/history"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        onClick={() => setOpen(false)}
        >History</NavLink>

        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={() => setOpen(false)}
        >News</NavLink>

    </nav>
    </>
  );
};

export default Navbar;
