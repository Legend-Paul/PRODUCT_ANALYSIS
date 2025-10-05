import React from "react";
import { Package, Search } from "lucide-react";
import "./ProductSelector.css";

const ProductSelector = ({ products, selectedProduct, onProductChange }) => {
    return (
        <div className="product-selector">
            <div className="selector-header">
                <Package size={20} />
                <h3>Select Product</h3>
            </div>

            <div className="search-container">
                <Search size={16} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                    onChange={() => {
                        // Implement search functionality if needed
                    }}
                />
            </div>

            <div className="products-list">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`product-item ${
                            selectedProduct === product.id ? "selected" : ""
                        }`}
                        onClick={() => onProductChange(product.id)}
                    >
                        <div className="product-image-small">
                            <img
                                src={product.image || "/api/placeholder/60/60"}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.src =
                                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5Y2EzZGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kPC90ZXh0Pjwvc3ZnPg==";
                                }}
                            />
                        </div>

                        <div className="product-info">
                            <div className="product-name">{product.name}</div>
                            <div className="product-categories">
                                {product.categories
                                    .slice(0, 2)
                                    .map((category, index) => (
                                        <span
                                            key={index}
                                            className="category-tag-small"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                {product.categories.length > 2 && (
                                    <span className="category-more">
                                        +{product.categories.length - 2}
                                    </span>
                                )}
                            </div>
                            <div className="product-stats-small">
                                <span className="stat">
                                    ${(product.revenue / 1000).toFixed(0)}K
                                </span>
                                <span className="stat">
                                    {product.growth}% growth
                                </span>
                            </div>
                        </div>

                        <div className="selection-indicator">
                            <div className="selection-dot" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="selected-product-info">
                {products.find((p) => p.id === selectedProduct) && (
                    <>
                        <h4>Selected Product</h4>
                        <div className="selected-details">
                            <strong>
                                {
                                    products.find(
                                        (p) => p.id === selectedProduct
                                    ).name
                                }
                            </strong>
                            <span>
                                Market Share:{" "}
                                {
                                    products.find(
                                        (p) => p.id === selectedProduct
                                    ).marketShare
                                }
                                %
                            </span>
                            <span>
                                Current Growth:{" "}
                                {
                                    products.find(
                                        (p) => p.id === selectedProduct
                                    ).growth
                                }
                                %
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductSelector;
