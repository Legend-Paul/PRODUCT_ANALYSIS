// src/components/Charts/PerformanceChart.js
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ data }) => {
    return (
        <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884d8"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#82ca9d"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="marketShare"
                        stroke="#ffc658"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;
