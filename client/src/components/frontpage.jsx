import React from 'react';
import StockChart from './StockChart';
import { Link } from 'react-router-dom';

export default function FrontPage() {
  return (
    <div className="grid grid-cols-2 gap-8 place-items-center h-screen">
      <div className="w-full">
        <Link to="/nasdaq" className="block">
          <StockChart 
            symbol="NDA" 
            title="NASDAQ" 
          />
        </Link>
      </div>
      <div className="w-full">
        <StockChart 
          symbol="SPY" 
          title="S&P 500" 
        />
      </div>
    </div>
  );
}