import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip,
} from "recharts";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import "./RiskAnalysis.css";

const RiskAnalysis = ({ data }) => {
    if (!data) return <div>No risk data available</div>;

    const riskData = [
        {
            name: "Supply Chain",
            value: data.supplyChainRisk * 100,
            color: "#f59e0b",
        },
        { name: "Market", value: data.marketRisk * 100, color: "#ef4444" },
        {
            name: "Competition",
            value: data.competitionRisk * 100,
            color: "#8b5cf6",
        },
        {
            name: "Regulatory",
            value: data.regulatoryRisk * 100,
            color: "#06b6d4",
        },
    ];

    const getRiskLevel = (risk) => {
        if (risk <= 0.3)
            return { level: "Low", color: "#10b981", icon: CheckCircle };
        if (risk <= 0.6)
            return { level: "Medium", color: "#f59e0b", icon: AlertTriangle };
        return { level: "High", color: "#ef4444", icon: AlertTriangle };
    };

    const overallRisk = getRiskLevel(data.overallRisk);

    return (
        <div className="risk-analysis">
            <div className="risk-overview">
                <div className="overall-risk">
                    <h4>Overall Risk Level</h4>
                    <div
                        className={`risk-level ${overallRisk.level.toLowerCase()}`}
                    >
                        <overallRisk.icon size={24} />
                        <span>{overallRisk.level} Risk</span>
                        <div className="risk-score">
                            {(data.overallRisk * 100).toFixed(0)}%
                        </div>
                    </div>
                </div>

                <div className="risk-chart">
                    <ResponsiveContainer width={200} height={200}>
                        <PieChart>
                            <Pie
                                data={riskData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {riskData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => [
                                    `${value}%`,
                                    "Risk Level",
                                ]}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="risk-breakdown">
                <h4>Risk Breakdown</h4>
                <div className="risk-items">
                    {riskData.map((risk) => {
                        const riskInfo = getRiskLevel(risk.value / 100);
                        return (
                            <div key={risk.name} className="risk-item">
                                <div className="risk-info">
                                    <span className="risk-name">
                                        {risk.name}
                                    </span>
                                    <span className="risk-value">
                                        {risk.value.toFixed(1)}%
                                    </span>
                                </div>
                                <div className="risk-bar">
                                    <div
                                        className="risk-fill"
                                        style={{
                                            width: `${risk.value}%`,
                                            backgroundColor: risk.color,
                                        }}
                                    />
                                </div>
                                <div className="risk-level-indicator">
                                    <riskInfo.icon
                                        size={16}
                                        color={riskInfo.color}
                                    />
                                    <span style={{ color: riskInfo.color }}>
                                        {riskInfo.level}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="risk-recommendations">
                <h4>
                    <Info size={20} />
                    Recommendations
                </h4>
                <ul>
                    {data.supplyChainRisk > 0.4 && (
                        <li>
                            Diversify supplier base to mitigate supply chain
                            dependencies
                        </li>
                    )}
                    {data.marketRisk > 0.5 && (
                        <li>Develop contingency plans for market volatility</li>
                    )}
                    {data.competitionRisk > 0.4 && (
                        <li>
                            Increase competitive analysis and differentiation
                            efforts
                        </li>
                    )}
                    {data.regulatoryRisk > 0.3 && (
                        <li>
                            Monitor regulatory changes in key markets closely
                        </li>
                    )}
                    {data.overallRisk <= 0.3 && (
                        <li>Maintain current risk management strategies</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RiskAnalysis;
