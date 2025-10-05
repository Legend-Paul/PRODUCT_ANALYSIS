// src/components/Common/StatsGrid.js
import React from "react";
import { TrendingUp, DollarSign, PieChart, Package } from "lucide-react";

const StatsGrid = ({ products }) => {
    const totals = products.reduce(
        (acc, product) => ({
            totalSales: acc.totalSales + product.currentSales,
            totalRevenue: acc.totalRevenue + product.revenue,
            avgMarketShare: acc.avgMarketShare + product.marketShare,
            avgGrowth: acc.avgGrowth + product.growth,
        }),
        { totalSales: 0, totalRevenue: 0, avgMarketShare: 0, avgGrowth: 0 }
    );

    const stats = [
        {
            label: "Total Sales",
            value: totals.totalSales.toLocaleString(),
            icon: Package,
            color: "blue",
        },
        {
            label: "Total Revenue",
            value: `$${(totals.totalRevenue / 1000).toFixed(0)}K`,
            icon: DollarSign,
            color: "green",
        },
        {
            label: "Avg Market Share",
            value: `${(totals.avgMarketShare / products.length).toFixed(1)}%`,
            icon: PieChart,
            color: "purple",
        },
        {
            label: "Avg Growth",
            value: `${(totals.avgGrowth / products.length).toFixed(1)}%`,
            icon: TrendingUp,
            color: "orange",
        },
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <div key={index} className={`stat-card stat-${stat.color}`}>
                    <div className="stat-icon">
                        <stat.icon size={24} />
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
