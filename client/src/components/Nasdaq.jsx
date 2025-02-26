import React from 'react';
import { Link } from 'react-router-dom';
import StockChart from './StockChart';

export default function Nasdaq() {
    // Top 10 NASDAQ stocks with their descriptions
    const topStocks = [
        {
            symbol: "AAPL",
            name: "Apple Inc.",
            description: "Technology company that designs, manufactures, and markets smartphones, computers, and consumer electronics."
        },
        {
            symbol: "MSFT",
            name: "Microsoft Corporation",
            description: "Technology company that develops, manufactures, and sells computer software, consumer electronics, and services."
        },
        {
            symbol: "GOOGL",
            name: "Alphabet Inc.",
            description: "Technology company specializing in internet-related services and products, including search, cloud computing, and advertising."
        },
        {
            symbol: "AMZN",
            name: "Amazon.com Inc.",
            description: "E-commerce and technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence."
        },
        {
            symbol: "META",
            name: "Meta Platforms Inc.",
            description: "Technology company focusing on social media, virtual reality, and metaverse technologies."
        },
        {
            symbol: "NVDA",
            name: "NVIDIA Corporation",
            description: "Technology company designing graphics processing units (GPUs) for gaming and professional markets."
        },
        {
            symbol: "TSLA",
            name: "Tesla Inc.",
            description: "Automotive and clean energy company that designs and manufactures electric vehicles and energy storage systems."
        },
        {
            symbol: "NFLX",
            name: "Netflix Inc.",
            description: "Entertainment company providing streaming media and video-on-demand services."
        },
        {
            symbol: "INTC",
            name: "Intel Corporation",
            description: "Technology company that designs and manufactures microprocessors and other semiconductor products."
        },
        {
            symbol: "CSCO",
            name: "Cisco Systems Inc.",
            description: "Technology company developing networking hardware, software, and telecommunications equipment."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Top 10 NASDAQ Stocks</h1>
            <div className="space-y-8">
                {topStocks.map((stock) => (
                    <Link 
                        to={`/stock/${stock.symbol}`} 
                        key={stock.symbol}
                        className="block hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg p-6">
                            <div className="h-[300px]">
                                <StockChart symbol={stock.symbol} title={stock.name} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2">{stock.name}</h2>
                                <p className="text-gray-600 mb-4">{stock.symbol}</p>
                                <p className="text-gray-700">{stock.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}