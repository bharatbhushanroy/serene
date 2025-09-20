"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', Income: 4000, Expenses: 2400 },
  { name: 'Feb', Income: 3000, Expenses: 1398 },
  { name: 'Mar', Income: 5000, Expenses: 3800 },
  { name: 'Apr', Income: 4500, Expenses: 3908 },
  { name: 'May', Income: 6000, Expenses: 4800 },
  { name: 'Jun', Income: 5500, Expenses: 4300 },
  { name: 'Jul', Income: 6200, Expenses: 5100 },
];

const SpendingChart = () => {
  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary">Spending Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] md:h-[350px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" /> {/* Use dashboard border color */}
            <XAxis dataKey="name" stroke="#94A3B8" /> {/* Use dashboard text secondary color */}
            <YAxis stroke="#94A3B8" /> {/* Use dashboard text secondary color */}
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.1)' }}
              contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px' }}
              labelStyle={{ color: '#F8FAFC' }}
              itemStyle={{ color: '#F8FAFC' }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px', color: '#F8FAFC' }} />
            <Bar dataKey="Income" fill="hsl(var(--fintech-dashboard-chart-bar-2))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Expenses" fill="hsl(var(--fintech-dashboard-chart-bar-1))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;