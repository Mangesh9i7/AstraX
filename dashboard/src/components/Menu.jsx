import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const navContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px", // Spacing strictly between the links
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const getTextStyle = (index) => ({
    fontSize: "22px",
    margin: 0,
    cursor: "pointer",
    fontWeight: selectMenu === index ? "bold" : "normal",
    color: selectMenu === index ? "#387ed1" : "#444",
  });

  return (
    <div
      className="menu-container"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 40px",
        borderBottom: "1px solid #eee",
        justifyContent: "space-between", // Pushes Logo to left and Nav+Profile to right
      }}
    >
      {/* Left Side: Logo */}
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />

      {/* Right Side: Links and Profile grouped together */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {/* Navigation Items */}
        <ul style={navContainerStyle}>
          <li>
            <Link onClick={() => handleMenuClick(0)} style={linkStyle} to="/">
              <p style={getTextStyle(0)}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(1)}
              style={linkStyle}
              to="/orders"
            >
              <p style={getTextStyle(1)}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(2)}
              style={linkStyle}
              to="/holdings"
            >
              <p style={getTextStyle(2)}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(3)}
              style={linkStyle}
              to="/positions"
            >
              <p style={getTextStyle(3)}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(4)}
              style={linkStyle}
              to="/funds"
            >
              <p style={getTextStyle(4)}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(5)}
              style={linkStyle}
              to="/apps"
            >
              <p style={getTextStyle(5)}>Apps</p>
            </Link>
          </li>
        </ul>

        {/* Profile Section */}
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <div
            className="avatar"
            style={{
              background: "#eee",
              padding: "5px 10px",
              borderRadius: "50%",
            }}
          >
            ZU
          </div>
          <p className="username" style={{ fontSize: "18px", margin: 0 }}>
            USERID
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
