import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../data/data";
//https://github.com/itsahab01/RoboHub.git
function DashboredLayouts({ setIsLoggedIn }) {
    const [showSidebar, setShowSidebar] = useState(true);
    const [activePage, setActivePage] = useState("dashboard");
    const navigate = useNavigate();

    const [products, setProducts] = useState(() => {
        localStorage.setItem("products", JSON.stringify(productsData));

        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : productsData;
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const toggleSidebar = () => setShowSidebar(prev => !prev);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <div className="layout">
            {showSidebar && (
                <Sidebar
                    activePage={activePage}
                    onPageChange={setActivePage}
                    onLogout={handleLogout}
                />
            )}

            <div className="main-area">
                <Header onToggleSidebar={toggleSidebar} />

                <MainContent
                    activePage={activePage}
                    products={products}
                    setProducts={setProducts}
                />
            </div>
        </div>
    );
}

export default DashboredLayouts;

