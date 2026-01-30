import logo from "../assets/images/logo.jpg";
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBook
} from "react-icons/fa";

function Sidebar({ activePage, onPageChange, onLogout}) {
  const navItems = [
    { id: "dashbored", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "product", label: "Product", icon: <FaBox /> },
    { id: "order", label: "Order", icon: <FaShoppingCart /> },
    { id: "user", label: "User", icon: <FaUsers /> },
    { id: "books", label: "Books API", icon: <FaBook /> },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h2>RoboHub</h2>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <button className="menu-btn" onClick={onLogout}>logout</button>
    </aside>
  );
}

export default Sidebar;






