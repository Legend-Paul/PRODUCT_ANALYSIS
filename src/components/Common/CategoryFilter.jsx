// src/components/Common/CategoryFilter.js
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="filter-group">
            <label>Filter by Category:</label>
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="filter-select"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
