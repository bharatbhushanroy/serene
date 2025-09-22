"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { CreditCard } from 'lucide-react';

const mockCreditData = [
  {
    name: 'Credit Card 1',
    utilization: 45, // Percentage
    fill: 'hsl(var(--fintech-dashboard-accent-blue))',
  },
  {
    name: 'Credit Card 2',
    utilization: 70,
    fill: 'hsl(var(--fintech-dashboard-accent-red))',
  },
  {
    name: 'Credit Card 3',
    utilization: 20,
    fill: 'hsl(var(--fintech-dashboard-accent-green))',
  },
];

const CreditCardUtilizationChart = () => {
  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-fintech-dashboard-accent-blue" /> Credit Card Utilization
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={15}
            data={mockCreditData}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff', fontSize: 12 }}
              background
              clockWise
              dataKey="utilization"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ color: 'hsl(var(--fintech-dashboard-text-secondary))' }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [`${value}%`, name]}
              contentStyle={{ backgroundColor: 'hsl(var(--fintech-dashboard-card-bg))', border: 'none', borderRadius: '8px' }}
              labelStyle={{ color: 'hsl(var(--fintech-dashboard-text-primary))' }}
              itemStyle={{ color: 'hsl(var(--fintech-dashboard-text-primary))' }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CreditCardUtilizationChart;