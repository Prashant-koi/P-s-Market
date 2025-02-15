import React from 'react';
import StockChart from './StockChart';

export default function FrontPage() {
  return (
    <div className="grid grid-cols-2 gap-8 place-items-center h-screen">
      <div className="w-full">
        <StockChart 
          symbol="NDA" 
          title="NASDAQ" 
        />
      </div>
      <div className="w-full">
        <StockChart 
          symbol="SPy" 
          title="S&P 500" 
        />
      </div>
    </div>
  );
}