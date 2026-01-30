const Header = ({ onToggleSidebar, activePage }) => {
  const pageTitles = {
    dashboard: "Dashboard",
    product: "Product",
    order: "Order",
    user: "User",
    BooksAPI: "BooksAPI",
  };

  return (
    <header className="header">
      <div className="show-btn"><button onClick={onToggleSidebar}>☰</button></div>
      <h3>{pageTitles[activePage]}</h3>
    </header>
  );
};

export default Header;