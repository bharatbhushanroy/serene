import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom'; // Import Link

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description: string;
  icon?: string; // URL for category icon or avatar
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'expense',
    category: 'Shopping',
    amount: 120.50,
    date: '2023-10-26',
    description: 'Online purchase at Amazon',
    icon: 'https://images.unsplash.com/photo-1528731708534-816fe59f90d4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2',
    type: 'income',
    category: 'Salary',
    amount: 3500.00,
    date: '2023-10-25',
    description: 'Monthly salary deposit',
    icon: 'https://images.unsplash.com/photo-1560523160-ff43e6916a4c?q=80&w=1974&auto=format&fit=fit',
  },
  {
    id: '3',
    type: 'expense',
    category: 'Food',
    amount: 45.75,
    date: '2023-10-24',
    description: 'Dinner with friends',
    icon: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1980&auto=format&fit=crop',
  },
  {
    id: '4',
    type: 'expense',
    category: 'Transport',
    amount: 15.00,
    date: '2023-10-23',
    description: 'Uber ride',
    icon: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5699?q=80&w=1950&auto=format&fit=crop',
  },
  {
    id: '5',
    type: 'income',
    category: 'Freelance',
    amount: 500.00,
    date: '2023-10-22',
    description: 'Payment for project X',
    icon: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
];

const RecentTransactions = () => {
  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary">Recent Transactions</CardTitle>
        <Link to="/dashboard/transactions"> {/* Wrapped button in Link */}
          <Button variant="ghost" size="sm" className="text-fintech-dashboard-accent-blue hover:bg-fintech-dashboard-border">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-fintech-dashboard-border transition-colors">
            <div className="flex items-center space-x-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={transaction.icon} alt={transaction.category} />
                <AvatarFallback className="bg-fintech-dashboard-border text-fintech-dashboard-text-secondary">
                  {transaction.category.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-fintech-dashboard-text-primary">{transaction.description}</p>
                <p className="text-sm text-fintech-dashboard-text-secondary">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`font-semibold text-lg ${
                  transaction.type === 'income' ? 'text-fintech-dashboard-accent-green' : 'text-fintech-dashboard-accent-red'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
              </span>
              {transaction.type === 'income' ? (
                <ArrowDownLeft className="h-4 w-4 text-fintech-dashboard-accent-green" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-fintech-dashboard-accent-red" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;