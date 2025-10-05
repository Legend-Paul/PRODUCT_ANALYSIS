import React from "react";
import { TrendingUp, DollarSign, PieChart } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={product.image || "/api/placeholder/300/200"}
                    alt={product.name}
                    onError={(e) => {
                        e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYTNkYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2R1Y3QgSW1hZ2U8L3RleHQ+PC9zdmc+";
                    }}
                />
            </div>

            <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-categories">
                    {product.categories.map((category, index) => (
                        <span key={index} className="category-tag">
                            {category}
                        </span>
                    ))}
                </div>

                <div className="product-stats">
                    <div className="stat-item">
                        <DollarSign size={16} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">
                                ${(product.revenue / 1000).toFixed(0)}K
                            </span>
                            <span className="stat-label">Revenue</span>
                        </div>
                    </div>

                    <div className="stat-item">
                        <PieChart size={16} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">
                                {product.marketShare}%
                            </span>
                            <span className="stat-label">Market Share</span>
                        </div>
                    </div>

                    <div className="stat-item">
                        <TrendingUp size={16} className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">
                                {product.growth}%
                            </span>
                            <span className="stat-label">Growth</span>
                        </div>
                    </div>
                </div>

                <div className="sales-info">
                    <span className="sales-label">Current Sales:</span>
                    <span className="sales-value">
                        {product.currentSales.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
