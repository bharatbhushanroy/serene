import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Home, GraduationCap, Car } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  icon: React.ElementType;
  colorClass: string;
}

const goals: Goal[] = [
  {
    id: '1',
    name: 'New Home Down Payment',
    currentAmount: 35000,
    targetAmount: 100000,
    icon: Home,
    colorClass: 'bg-fintech-dashboard-accent-blue',
  },
  {
    id: '2',
    name: 'Child Education Fund',
    currentAmount: 15000,
    targetAmount: 50000,
    icon: GraduationCap,
    colorClass: 'bg-fintech-dashboard-accent-green',
  },
  {
    id: '3',
    name: 'New Car Purchase',
    currentAmount: 8000,
    targetAmount: 25000,
    icon: Car,
    colorClass: 'bg-fintech-dashboard-accent-red',
  },
];

const GoalsProgress = () => {
  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary">Savings Goals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-full ${goal.colorClass}/20`}>
                    <goal.icon className={`h-4 w-4 ${goal.colorClass.replace('bg-', 'text-')}`} />
                  </div>
                  <p className="font-medium text-fintech-dashboard-text-primary">{goal.name}</p>
                </div>
                <p className="text-sm text-fintech-dashboard-text-secondary">
                  {progress.toFixed(0)}%
                </p>
              </div>
              <Progress value={progress} className="h-2 bg-fintech-dashboard-progress-bg" indicatorClassName={goal.colorClass} />
              <div className="flex justify-between text-sm text-fintech-dashboard-text-secondary">
                <span>₹{goal.currentAmount.toLocaleString()}</span>
                <span>₹{goal.targetAmount.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default GoalsProgress;