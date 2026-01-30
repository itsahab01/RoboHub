import StateCard from "./StateCard";
import {
    FaMoneyBillWave,
    FaShoppingCart,
    FaExclamationTriangle,
    FaBox
} from "react-icons/fa";

function StatsCards({ orders, products }) {

    const completedOrders = orders.filter(o => o.status === "completed");

    const totalRevenue = completedOrders.reduce(
        (sum, order) => sum + order.totalPrice,
        0
    );

    const outOfStockProducts = products.filter(
        p => p.stock === 0 || !p.active
    );

    return (
        <div className="stats-grid">
            <StateCard
                icon={FaMoneyBillWave}
                title="Total Revenue"
                value={`${totalRevenue} SAR`}
                color="#0da9ae"
            />

            <StateCard
                icon={FaShoppingCart}
                title="Total Orders"
                value={orders.length}
                color="#68be80"
            />

            <StateCard
                icon={FaBox}
                title="Total Products"
                value={products.length}
                color="#6b94bb"
            />

            <StateCard
                icon={FaExclamationTriangle}
                title="Out of Stock"
                value={outOfStockProducts.length}
                color="#d96666"
            />
        </div>
    );
}

export default StatsCards;

