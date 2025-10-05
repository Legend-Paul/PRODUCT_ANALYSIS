// src/pages/ProductInsights/ProductInsights.js
import React, { useState, useMemo } from "react";
import { mockProductData, performanceData } from "../../data/mockData";
import PerformanceChart from "../../components/Charts/PerformanceChart";
import CategoryFilter from "../../components/Common/CategoryFilter";
import ProductCard from "../../components/Common/ProductCard";
import StatsGrid from "../../components/Common/StatsGrid";
import "./ProductInsights.css";

const ProductInsights = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedYearRange, setSelectedYearRange] = useState(5);

    const categories = useMemo(() => {
        const allCategories = mockProductData.flatMap(
            (product) => product.categories
        );
        return ["all", ...new Set(allCategories)];
    }, []);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "all") return mockProductData;
        return mockProductData.filter((product) =>
            product.categories.includes(selectedCategory)
        );
    }, [selectedCategory]);

    const filteredPerformanceData = useMemo(() => {
        return performanceData
            .filter(
                (item) =>
                    selectedCategory === "all" ||
                    item.category === selectedCategory
            )
            .slice(-selectedYearRange);
    }, [selectedCategory, selectedYearRange]);

    return (
        <div className="product-insights">
            <div className="page-header">
                <h1>Product Insights</h1>
                <p>
                    Comprehensive analysis of product performance and market
                    trends
                </p>
            </div>

            <div className="controls-section">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                <div className="year-filter">
                    <label>Time Range:</label>
                    <select
                        value={selectedYearRange}
                        onChange={(e) =>
                            setSelectedYearRange(Number(e.target.value))
                        }
                    >
                        <option value={1}>1 Year</option>
                        <option value={2}>2 Years</option>
                        <option value={3}>3 Years</option>
                        <option value={4}>4 Years</option>
                        <option value={5}>5 Years</option>
                    </select>
                </div>
            </div>

            <StatsGrid products={filteredProducts} />

            <div className="charts-section">
                <div className="chart-container">
                    <h3>Performance Trends</h3>
                    <PerformanceChart data={filteredPerformanceData} />
                </div>
            </div>

            <div className="products-grid">
                <h3>Products Overview</h3>
                <div className="products-container">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductInsights;
