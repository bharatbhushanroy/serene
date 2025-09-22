"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, CalendarDays, CheckCircle, Hourglass, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Loan {
  id: string;
  name: string;
  amount: number;
  status: 'Active' | 'Paid Off' | 'Overdue';
  nextPaymentDate?: string;
  nextPaymentAmount?: number;
}

const mockLoans: Loan[] = [
  {
    id: 'loan-1',
    name: 'Personal Loan',
    amount: 150000,
    status: 'Active',
    nextPaymentDate: '2024-11-01',
    nextPaymentAmount: 7500,
  },
  {
    id: 'loan-2',
    name: 'Home Loan',
    amount: 5000000,
    status: 'Active',
    nextPaymentDate: '2024-11-05',
    nextPaymentAmount: 45000,
  },
  {
    id: 'loan-3',
    name: 'Car Loan',
    amount: 800000,
    status: 'Paid Off',
  },
  {
    id: 'loan-4',
    name: 'Education Loan',
    amount: 300000,
    status: 'Overdue',
    nextPaymentDate: '2024-10-15',
    nextPaymentAmount: 12000,
  },
];

const LoanTrackingCard = () => {
  const getStatusIcon = (status: Loan['status']) => {
    switch (status) {
      case 'Active':
        return <Hourglass className="h-4 w-4 text-fintech-dashboard-accent-blue" />;
      case 'Paid Off':
        return <CheckCircle className="h-4 w-4 text-fintech-dashboard-accent-green" />;
      case 'Overdue':
        return <XCircle className="h-4 w-4 text-fintech-dashboard-accent-red" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: Loan['status']) => {
    switch (status) {
      case 'Active':
        return 'text-fintech-dashboard-accent-blue';
      case 'Paid Off':
        return 'text-fintech-dashboard-accent-green';
      case 'Overdue':
        return 'text-fintech-dashboard-accent-red';
      default:
        return 'text-fintech-dashboard-text-secondary';
    }
  };

  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary">My Loans</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockLoans.map((loan) => (
          <div key={loan.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-fintech-dashboard-border transition-colors">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-fintech-dashboard-accent-blue/20">
                <DollarSign className="h-4 w-4 text-fintech-dashboard-accent-blue" />
              </div>
              <div>
                <p className="font-medium text-fintech-dashboard-text-primary">{loan.name}</p>
                <p className="text-sm text-fintech-dashboard-text-secondary">₹{loan.amount.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <div className="flex items-center space-x-1">
                {getStatusIcon(loan.status)}
                <span className={cn("text-sm font-medium", getStatusColor(loan.status))}>
                  {loan.status}
                </span>
              </div>
              {loan.nextPaymentDate && (
                <p className="text-xs text-fintech-dashboard-text-secondary flex items-center">
                  <CalendarDays className="h-3 w-3 mr-1" />
                  Next: {loan.nextPaymentDate} (₹{loan.nextPaymentAmount?.toLocaleString()})
                </p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LoanTrackingCard;