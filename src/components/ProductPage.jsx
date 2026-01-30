import { useState } from "react";
import { productsData } from "../data/data";
import ProductTable from "./ProductTable";
import ProductFormModal from "./ProductFormModal";

function ProductPage({products, setProducts}) {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        catagory: "",
        price: "",
        stock: "",
        active: true,
    });

    const filteredProducts = products.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.catagory.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openAddForm = () => {
        setEditProduct(null);
        setFormData({
            name: "",
            image: "",
            catagory: "",
            price: "",
            stock: "",
            active: true,
        });
        setShowForm(true);
    };

    const openEditForm = (product) => {
        setEditProduct(product);
        setFormData(product);
        setShowForm(true);
    };

    const closeForm = () => {
        setEditProduct(null);
        setShowForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editProduct) {
            setProducts(products.map(p =>
                p.id === editProduct.id ? { ...p, ...formData } : p
            ));
        } else {
            setProducts([...products, { ...formData, id: products.length + 1 }]);
        }

        closeForm();
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div className="main-content">

            <div className="page-header">
                <h2>Products</h2>
                <button className="btn-add" onClick={openAddForm}>
                    Add Product
                </button>
            </div>

            <div className="search-bar1">
                <input
                    type="text"
                    className="search-input1"
                    placeholder="Search by name or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <ProductTable
                products={filteredProducts}
                onEdit={openEditForm}
                onDelete={deleteProduct}
            />

            {showForm && (
                <ProductFormModal
                    formData={formData}
                    setFormData={setFormData}
                    editProduct={editProduct}
                    onSubmit={handleSubmit}
                    onClose={closeForm}
                />
            )}
        </div>
    );
}

export default ProductPage;
