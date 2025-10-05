// src/components/Layout/Layout.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, TrendingUp } from "lucide-react";
import "./Layout.css";

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="layout">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-brand">
                        <BarChart3 className="brand-icon" />
                        <span>Product Analytics</span>
                    </div>
                    <div className="nav-links">
                        <Link
                            to="/product-insights"
                            className={`nav-link ${
                                location.pathname.includes("product-insights")
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <BarChart3 size={18} />
                            Product Insights
                        </Link>
                        <Link
                            to="/prediction-analysis"
                            className={`nav-link ${
                                location.pathname.includes(
                                    "prediction-analysis"
                                )
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <TrendingUp size={18} />
                            Prediction & Analysis
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="main-content">{children}</main>
        </div>
    );
};

export default Layout;
