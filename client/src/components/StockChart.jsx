import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import apifetch from '../utils/apifetch';

const StockChart = ({ symbol, title }) => {
  const [stockData, setStockData] = useState(null);
  
  useEffect(() => {
    console.log('Effect running for:', symbol);
    
    const fetchData = async () => {
      try {
        console.log('Starting fetch for:', symbol);
        const result = await apifetch(symbol);
        console.log('Got data:', result);
        // Reverse the data array so latest dates are on the right
        setStockData([...result.data].reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  // Format date to be more readable
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Custom tooltip to display all values
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border rounded shadow">
          <p className="font-bold">{formatDate(data.date)}</p>
          <p className="text-green-600">Open: ${data.open.toFixed(2)}</p>
          <p className="text-red-600">Close: ${data.close.toFixed(2)}</p>
          <p>High: ${data.high.toFixed(2)}</p>
          <p>Low: ${data.low.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <h1 className="font-bold text-center mb-4 text-xl">{title}</h1>
      {stockData ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={stockData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="close"
              name="Close Price"
              stroke="#4BC0C0"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="open"
              name="Open Price"
              stroke="#FF6384"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex justify-center items-center h-full">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default StockChart;