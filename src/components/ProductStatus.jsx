function ProductStatus({ products }) {

    const inStockProducts = products.filter(
        p => p.stock > 0 && p.active
    );

    const outOfStockProducts = products.filter(
        p => p.stock === 0 || !p.active
    );

    return (
        <div className="products-summary">
            <h3>Products Status</h3>

            <div className="products-bars">
                <div className="product-status">
                    <span>Available</span>
                    <div className="bar-bg">
                        <div
                            className="bar-fill available"
                            style={{
                                width: `${(inStockProducts.length / products.length) * 100}%`
                            }}
                        />
                    </div>
                    <span>{inStockProducts.length}</span>
                </div>

                <div className="product-status">
                    <span>Out of Stock</span>
                    <div className="bar-bg">
                        <div
                            className="bar-fill out"
                            style={{
                                width: `${(outOfStockProducts.length / products.length) * 100}%`
                            }}
                        />
                    </div>
                    <span>{outOfStockProducts.length}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductStatus;
