// src/data/mockData.js
export const mockProductData = [
    {
        id: 1,
        name: "Smartphone X1",
        image: "/api/placeholder/300/200",
        categories: ["Electronics", "Mobile"],
        currentSales: 15420,
        revenue: 1250000,
        marketShare: 15.2,
        growth: 12.5,
        description: "Flagship smartphone with advanced features",
    },
    {
        id: 2,
        name: "Laptop Pro",
        image: "/api/placeholder/300/200",
        categories: ["Electronics", "Computers"],
        currentSales: 8920,
        revenue: 890000,
        marketShare: 8.7,
        growth: 8.2,
        description: "Professional laptop for business users",
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        image: "/api/placeholder/300/200",
        categories: ["Electronics", "Audio"],
        currentSales: 23450,
        revenue: 567000,
        marketShare: 22.1,
        growth: 25.8,
        description: "Premium wireless audio experience",
    },
];

export const performanceData = [
    {
        year: 2019,
        sales: 10000,
        revenue: 800000,
        marketShare: 10.2,
        category: "Electronics",
    },
    {
        year: 2020,
        sales: 12000,
        revenue: 950000,
        marketShare: 11.5,
        category: "Electronics",
    },
    {
        year: 2021,
        sales: 14500,
        revenue: 1100000,
        marketShare: 13.1,
        category: "Electronics",
    },
    {
        year: 2022,
        sales: 16800,
        revenue: 1250000,
        marketShare: 14.8,
        category: "Electronics",
    },
    {
        year: 2023,
        sales: 19200,
        revenue: 1400000,
        marketShare: 16.2,
        category: "Electronics",
    },
];

export const predictionData = [
    {
        productId: 1,
        period: "Q1 2024",
        actual: 15420,
        predicted: 16000,
        confidenceMin: 14500,
        confidenceMax: 17500,
    },
    {
        productId: 1,
        period: "Q2 2024",
        actual: null,
        predicted: 17500,
        confidenceMin: 16000,
        confidenceMax: 19000,
    },
    {
        productId: 1,
        period: "Q3 2024",
        actual: null,
        predicted: 19200,
        confidenceMin: 17500,
        confidenceMax: 20900,
    },
    {
        productId: 1,
        period: "Q4 2024",
        actual: null,
        predicted: 21000,
        confidenceMin: 19500,
        confidenceMax: 22500,
    },
];

export const riskAnalysis = [
    {
        productId: 1,
        supplyChainRisk: 0.3,
        marketRisk: 0.4,
        competitionRisk: 0.6,
        regulatoryRisk: 0.2,
        overallRisk: 0.375,
    },
];
