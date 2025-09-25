import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
// Removed imports for other dashboard components to isolate the issue
// import OverviewCard from '@/components/OverviewCard';
// import SpendingChart from '@/components/SpendingChart';
// import RecentTransactions from '@/components/RecentTransactions';
// import GoalsProgress from '@/components/GoalsProgress';
// import QuickTransfer from '@/components/QuickTransfer';
// import LoanTrackingCard from '@/components/LoanTrackingCard';
// import AiBalanceTransferSuggestions from '@/components/AiBalanceTransferSuggestions';
// import CreditCardUtilizationChart from '@/components/CreditCardUtilizationChart';
// import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="p-4 text-white text-2xl font-bold">
        Dashboard Content Should Appear Here!
        <p className="text-lg text-gray-400 mt-2">If you see this, the layout is working. If not, please check the console for errors.</p>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;