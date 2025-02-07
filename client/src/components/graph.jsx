import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  CartesianGrid,
  Legend 
} from 'recharts';

export default function Graph({ data }) {
  const chartData = data?.data
    ?.map(item => ({
      ...item,
      date: new Date(item.date).toLocaleDateString(), 
    }))
    .reverse() || []; //this will reverse the array to show oldest on the left and newer on right

  return (
    <div className="w-full h-[400px] p-4">
      <ResponsiveContainer>
        <LineChart 
          data={chartData}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis 
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={false}
          />
          <YAxis 
            domain={['auto', 'auto']}
            tick={{ fontSize: 12 }}
            tickLine={false}
            width={60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
              borderRadius: '8px',
              padding: '10px'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="close" 
            stroke="#4BC0C0"
            strokeWidth={2}
            dot={false}
            name="Closing Price"
          />
          <Line 
            type="monotone" 
            dataKey="open" 
            stroke="#FF6384"
            strokeWidth={2}
            dot={false}
            name="Opening Price"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}