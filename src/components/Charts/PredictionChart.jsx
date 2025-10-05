// src/components/Charts/PredictionChart.js
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
    Area,
} from "recharts";

const PredictionChart = ({ data }) => {
    return (
        <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="confidenceMin"
                        fill="#8884d8"
                        stroke="none"
                        opacity={0.3}
                    />
                    <Line
                        type="monotone"
                        dataKey="predicted"
                        stroke="#8884d8"
                        strokeWidth={3}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="actual"
                        stroke="#82ca9d"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="confidenceMax"
                        stroke="#8884d8"
                        strokeDasharray="5 5"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PredictionChart;
