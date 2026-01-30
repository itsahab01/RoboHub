import { useState } from "react";
import { ordersData } from "../data/order";

function OrderPage() {
    const [orders, setOrders] = useState(ordersData);
    const [showInvoice, setShowInvoice] = useState(false);
    const[selectedOrder, setSelectedOrder] = useState(null);

    const openInvoice = (order) => {
        setSelectedOrder(order);
        setShowInvoice(true);
    };

    const closeInvoice = () =>{
        setSelectedOrder(null);
        setShowInvoice(false);
    };

    const updateStatus = (newStatus) => {
        setOrders(
            orders.map((order) =>
                order.id === selectedOrder.id ? { ...order, status: newStatus } : order
            )
            );
        setSelectedOrder({ ...selectedOrder, status: newStatus });

};

    return (
        <div className="main-content">
            <h2>Orders</h2>
            
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>ORD-0{order.id}</td>
                            <td>
                                <div>
                                    <strong>{order.customer}</strong>
                                    <br/>
                                    <small style={{color: "#666"}}>{order.email}</small>
                                </div>
                            </td>
                            <td>{order.totalItems}</td>
                            <td>{order.totalPrice} SR</td>
                            <td>{order.date}</td>
                            <td>
                                <span className={
                                    order.status === "completed" ? "badge completed" : order.status === "pending" ? "badge pending" : "badge cancelled"}>
                                    {order.status}
                                </span>
                            </td>

                            <td>
                                <button className="view-btn" onClick={() => openInvoice(order)}>👁 View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showInvoice && selectedOrder && (
            <div className="modal-overlay">
                <div className="modal-card">
                    <h3>Order Details - ORD-{selectedOrder.id < 10 ? `0${selectedOrder.id}` : selectedOrder.id}</h3>

                        <div className="invoice-info">
                            <p>Customer Name <strong>{selectedOrder.customer}</strong></p>
                            <p>Email <strong>{selectedOrder.email}</strong></p>
                            <p>Order Date <strong>{selectedOrder.date}</strong></p>
                            <p>Status <span className={
                                selectedOrder.status === "completed" ? "badge completed" : selectedOrder.status === "pending" ? "badge pending" : "badge cancelled"}>
                                {selectedOrder.status === "completed" ? "completed"
                                    : selectedOrder.status === "pending" ? "pending" : "cancelled"
                                }
                            </span></p>
                        </div>

                    <div className="invoice-items">
                        <h4>Order Items</h4>

                        <table className="items-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {selectedOrder.products.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price} SR</td>
                                        <td>{(item.quantity*item.price).toFixed(2)} SR</td>
                                    </tr>
                                ))}
                            </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3"><strong>Total</strong></td>
                                        <td>
                                            <strong>
                                                {selectedOrder.products
                                                    .reduce((sum, item) => sum + item.quantity * item.price, 0)
                                                    .toFixed(2)} SR
                                            </strong>
                                        </td>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                    <div className="invoice-actions">
                        <button className="btn completed" onClick={() => updateStatus("completed")}>Mark Completed</button>
                        <button className="btn pending" onClick={() => updateStatus("pending")}>Mark Pending</button>
                        <button className="btn cancelled" onClick={() => updateStatus("cancelled")}>Cancel Order</button>
                    </div>
                    <button className="close-btn" onClick={closeInvoice}>Close</button>
                </div>
            </div>
            )}
            
        </div>
    );
}

export default OrderPage;
