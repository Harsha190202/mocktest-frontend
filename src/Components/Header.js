import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRequireAuth } from "./Authentication";

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useRequireAuth();

  useEffect(() => {
    const userData = localStorage.getItem("userdata");
    if (userData) {
      const userInfo = JSON.parse(userData);
      const username = userInfo?.data?.loggedInUser?.username;
      setUsername(username[0].toUpperCase());
    }
  }, []);

  function handleLogout() {
    localStorage.clear("userData");
    setUsername("");
    navigate("/login");
  }

  return (
    <div className="header flex-row">
      <div className="logo-section">Mock Tests Practice</div>
      <div className=" flex-row routing-section ">
        <Link to="/">Home</Link>
        <Link to="/tests">Tests</Link>
        <Link to="/about">About Us</Link>
        <Link to="/userinfo" className="userlogo flex-row">
          {username}
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
