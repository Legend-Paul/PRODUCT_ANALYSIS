import React from "react";
import {
    TrendingUp,
    TrendingDown,
    Minus,
    Target,
    Zap,
    BarChart3,
} from "lucide-react";
import "./GrowthMetrics.css";

const GrowthMetrics = ({ product, predictions }) => {
    if (!product || !predictions) return <div>Loading metrics...</div>;

    // Calculate growth metrics from predictions
    const latestPrediction = predictions[predictions.length - 1];
    const firstActual = predictions.find((p) => p.actual)?.actual;

    const projectedGrowth = firstActual
        ? ((latestPrediction.predicted - firstActual) / firstActual) * 100
        : 12.5;

    const confidenceRange = latestPrediction
        ? ((latestPrediction.confidenceMax - latestPrediction.confidenceMin) /
              latestPrediction.predicted) *
          100
        : 15;

    const metrics = [
        {
            label: "Projected Growth",
            value: `${projectedGrowth.toFixed(1)}%`,
            change: projectedGrowth,
            icon: TrendingUp,
            description: "Next 12 months forecast",
        },
        {
            label: "Market Position",
            value: `#${Math.floor(Math.random() * 5) + 1}`,
            change: -2,
            icon: Target,
            description: "Industry ranking",
        },
        {
            label: "Growth Velocity",
            value: `${(product.growth * 1.2).toFixed(1)}%`,
            change: product.growth * 0.3,
            icon: Zap,
            description: "Quarter-over-quarter",
        },
        {
            label: "Prediction Confidence",
            value: `${(100 - confidenceRange).toFixed(0)}%`,
            change: 5,
            icon: BarChart3,
            description: "Forecast accuracy",
        },
    ];

    const getTrendIcon = (change) => {
        if (change > 0) return <TrendingUp size={16} className="trend-up" />;
        if (change < 0)
            return <TrendingDown size={16} className="trend-down" />;
        return <Minus size={16} className="trend-neutral" />;
    };

    const getChangeColor = (change) => {
        if (change > 0) return "positive";
        if (change < 0) return "negative";
        return "neutral";
    };

    return (
        <div className="growth-metrics">
            <div className="metrics-grid">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                        <div className="metric-header">
                            <div className="metric-icon">
                                <metric.icon size={20} />
                            </div>
                            <div className="metric-trend">
                                {getTrendIcon(metric.change)}
                                <span
                                    className={`change ${getChangeColor(
                                        metric.change
                                    )}`}
                                >
                                    {metric.change > 0 ? "+" : ""}
                                    {metric.change.toFixed(1)}%
                                </span>
                            </div>
                        </div>

                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                        <div className="metric-description">
                            {metric.description}
                        </div>

                        <div className="metric-bar">
                            <div
                                className={`metric-fill ${getChangeColor(
                                    metric.change
                                )}`}
                                style={{
                                    width: `${Math.min(
                                        Math.abs(metric.change) * 2,
                                        100
                                    )}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="growth-insights">
                <h4>Growth Insights</h4>
                <div className="insights-list">
                    {projectedGrowth > 15 && (
                        <div className="insight positive">
                            <strong>High Growth Potential:</strong> Projected
                            growth exceeds market average
                        </div>
                    )}
                    {confidenceRange < 20 && (
                        <div className="insight positive">
                            <strong>Reliable Forecast:</strong> High confidence
                            in predictions
                        </div>
                    )}
                    {product.growth < 5 && (
                        <div className="insight warning">
                            <strong>Growth Concern:</strong> Below market
                            average growth rate
                        </div>
                    )}
                    {projectedGrowth > product.growth && (
                        <div className="insight info">
                            <strong>Accelerating Trend:</strong> Future growth
                            expected to outpace current rates
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GrowthMetrics;
