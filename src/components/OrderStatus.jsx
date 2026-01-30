import React from "react";

function OrderStatus({ orders }) {

    const totalOrders = orders.length;

    const completedOrders = orders.filter(o => o.status === "completed");
    const pendingOrders = orders.filter(o => o.status === "pending");
    const cancelledOrders = orders.filter(o => o.status === "cancelled");

    return (
        <div className="orders-status">
            <h3>Orders Status</h3>

            <div className="status-bar">
                <span>Completed</span>
                <div className="bar-bg">
                    <div
                        className="bar-fill completed"
                        style={{ width: `${(completedOrders.length / totalOrders) * 100}%` }}
                    />
                </div>
                <span>{completedOrders.length}</span>
            </div>

            <div className="status-bar">
                <span>Pending</span>
                <div className="bar-bg">
                    <div
                        className="bar-fill pending"
                        style={{ width: `${(pendingOrders.length / totalOrders) * 100}%` }}
                    />
                </div>
                <span>{pendingOrders.length}</span>
            </div>

            <div className="status-bar">
                <span>Cancelled</span>
                <div className="bar-bg">
                    <div
                        className="bar-fill cancelled"
                        style={{ width: `${(cancelledOrders.length / totalOrders) * 100}%` }}
                    />
                </div>
                <span>{cancelledOrders.length}</span>
            </div>
        </div>
    );
}

export default OrderStatus;
