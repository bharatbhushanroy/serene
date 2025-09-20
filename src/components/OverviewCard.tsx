import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OverviewCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  iconBgColor: string;
  valueColor?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconBgColor,
  valueColor,
}) => {
  const changeColorClass = {
    positive: 'text-fintech-dashboard-accent-green',
    negative: 'text-fintech-dashboard-accent-red',
    neutral: 'text-fintech-dashboard-text-secondary',
  }[changeType];

  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-fintech-dashboard-text-secondary">{title}</CardTitle>
        <div className={cn("p-2 rounded-md", iconBgColor)}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", valueColor)}>{value}</div>
        {change && (
          <p className={cn("text-xs", changeColorClass)}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;