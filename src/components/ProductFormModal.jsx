function ProductFormModal({
    formData,
    setFormData,
    editProduct,
    onSubmit,
    onClose,
}) {

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>{editProduct ? "Edit Product" : "Add Product"}</h3>

                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    image: URL.createObjectURL(e.target.files[0]),
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="catagory"
                            value={formData.catagory}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="form-actions">
                        <button type="submit" className="btn-add">
                            {editProduct ? "Update" : "Add"}
                        </button>
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ProductFormModal;

