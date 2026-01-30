import ProductPage from "./ProductPage";
import UserPage from "./UserPage";
import OrderPage from "./OrderPage";
import BooksAPI from "./BooksAPI";
import { ordersData } from "../data/order";

import StatsCards from "./StatsCards";
import OrderStatus from "./OrderStatus";
import ProductStatus from "./ProductStatus";

function MainContent({activePage, products, setProducts}) {

  if (activePage === "product") {
    return(
    <main>
      <ProductPage products={products} setProducts={setProducts} />
      </main>
    );
  }

  if (activePage === "order") return <OrderPage />;
  if (activePage === "user") return <UserPage />;
  if (activePage === "books") return <BooksAPI />;

  return (
    <div className="dashboard-container">
      <h2 className="page-title">Admin Dashboard</h2>

      <StatsCards
        orders={ordersData}
        products={products}
      />

      <OrderStatus orders={ordersData} />

      <ProductStatus products={products} />
    </div>
  );
}

export default MainContent;
