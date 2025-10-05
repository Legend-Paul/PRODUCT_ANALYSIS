// src/pages/PredictionAnalysis/PredictionAnalysis.js
import React, { useState } from "react";
import {
    mockProductData,
    predictionData,
    riskAnalysis,
} from "../../data/mockData";
import PredictionChart from "../../components/Charts/PredictionChart";
import RiskAnalysis from "../../components/Charts/RiskAnalysis";
import GrowthMetrics from "../../components/Common/GrowthMetrics";
import ProductSelector from "../../components/Common/ProductSelector";
import "./PredictionAnalysis.css";

const PredictionAnalysis = () => {
    const [selectedProduct, setSelectedProduct] = useState(
        mockProductData[0].id
    );

    const selectedProductData = mockProductData.find(
        (p) => p.id === selectedProduct
    );
    const productPredictions = predictionData.filter(
        (p) => p.productId === selectedProduct
    );
    const productRisks = riskAnalysis.find(
        (r) => r.productId === selectedProduct
    );

    return (
        <div className="prediction-analysis">
            <div className="page-header">
                <h1>Prediction & Analysis</h1>
                <p>Future performance forecasting and risk assessment</p>
            </div>

            <div className="controls-section">
                <ProductSelector
                    products={mockProductData}
                    selectedProduct={selectedProduct}
                    onProductChange={setSelectedProduct}
                />
            </div>

            <div className="analysis-grid">
                <div className="prediction-section">
                    <h3>Sales Forecast</h3>
                    <PredictionChart data={productPredictions} />
                </div>

                <div className="metrics-section">
                    <h3>Growth Metrics</h3>
                    <GrowthMetrics
                        product={selectedProductData}
                        predictions={productPredictions}
                    />
                </div>
            </div>

            <div className="risk-section">
                <h3>Risk Analysis</h3>
                <RiskAnalysis data={productRisks} />
            </div>

            <div className="insights-section">
                <h3>Key Insights</h3>
                <div className="insights-grid">
                    <div className="insight-card positive">
                        <h4>Growth Opportunities</h4>
                        <ul>
                            <li>
                                Market expansion potential in emerging regions
                            </li>
                            <li>Seasonal demand increase expected in Q3</li>
                            <li>
                                Competitor product discontinuation creates
                                opportunity
                            </li>
                        </ul>
                    </div>
                    <div className="insight-card warning">
                        <h4>Potential Risks</h4>
                        <ul>
                            <li>
                                Supply chain dependencies on single-source
                                suppliers
                            </li>
                            <li>
                                Currency fluctuation impact on international
                                sales
                            </li>
                            <li>Regulatory changes in key markets</li>
                        </ul>
                    </div>
                    <div className="insight-card info">
                        <h4>Recommendations</h4>
                        <ul>
                            <li>Diversify supplier base to mitigate risks</li>
                            <li>
                                Increase marketing budget for high-potential
                                regions
                            </li>
                            <li>
                                Develop contingency plans for regulatory changes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictionAnalysis;
