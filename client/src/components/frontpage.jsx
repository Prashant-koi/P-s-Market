import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function FrontPage() {
  const data = [
    { name: 'January', value: 16000 },
    { name: 'February', value: 17000 },
    { name: 'March', value: 16750 },
    { name: 'April', value: 17500 },
    { name: 'May', value: 19000 },
    { name: 'June', value: 22500 },
    { name: 'July', value: 22000 },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 place-items-center mt-20">
      <div className="w-full">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4BC0C0"
            strokeWidth={2}
          />
        </LineChart>
        <h1 className="font-bold text-center mt-4">NASDAQ</h1>
      </div>
      <div className='w-full'>
      <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4BC0C0"
            strokeWidth={2}
          />
        </LineChart>
      <h1 className="font-bold text-center mt-4">S&P 500</h1>
      </div>
    </div>
  );
}