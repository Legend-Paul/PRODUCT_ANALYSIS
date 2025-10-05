// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductInsights from "./pages/ProductInsights/ProductInsights";
import PredictionAnalysis from "./pages/PredictionAnalysis/PredictionAnalysis";
import "./styles/global.css";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<ProductInsights />} />
                    <Route
                        path="/product-insights"
                        element={<ProductInsights />}
                    />
                    <Route
                        path="/prediction-analysis"
                        element={<PredictionAnalysis />}
                    />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
