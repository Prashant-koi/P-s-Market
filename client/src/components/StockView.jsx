import React from 'react';
import { useParams } from 'react-router-dom';
import StockChart from './StockChart';

export default function StockView() {
    const { symbol } = useParams();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <StockChart 
                    symbol={symbol} 
                    title={`${symbol} Stock Price`} 
                />
            </div>
        </div>
    );
} 