function ProductTable({ products, onEdit, onDelete }) {
    if (!products.length) {
        return <p className="empty">No products found</p>;
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.image} alt={item.name} width="80" />
                        </td>
                        <td>{item.catagory}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                            <span className={item.active ? "badg active" : "badg inactive"}>
                                {item.active ? "Active" : "Out of Stock"}
                            </span>
                        </td>
                        <td>
                            <button className="edit-btn" onClick={() => onEdit(item)}>
                                Edit
                            </button>
                            <button className="delete-btn" onClick={() => onDelete(item.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;
