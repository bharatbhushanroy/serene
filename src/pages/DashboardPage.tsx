import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import OverviewCard from '@/components/OverviewCard';
import SpendingChart from '@/components/SpendingChart';
import RecentTransactions from '@/components/RecentTransactions';
import GoalsProgress from '@/components/GoalsProgress';
import QuickTransfer from '@/components/QuickTransfer';
import LoanTrackingCard from '@/components/LoanTrackingCard';
import AiBalanceTransferSuggestions from '@/components/AiBalanceTransferSuggestions';
import CreditCardUtilizationChart from '@/components/CreditCardUtilizationChart';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // New import

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Qicky Dashboard - Your Financial Overview</title>
        <meta name="description" content="Access your Qicky dashboard to view your total balance, income, expenses, recent transactions, and manage your loans and goals." />
      </Helmet>
      <div className="space-y-6 p-4">
        {/* The h1 tag is implicitly handled by the DashboardHeader or the layout itself for internal pages */}
        <h1 className="sr-only">Dashboard Overview</h1> {/* Hidden h1 for accessibility/SEO */}
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OverviewCard
            title="Total Balance"
            value="₹1,25,000"
            change="+10% from last month"
            changeType="positive"
            icon={DollarSign}
            iconBgColor="bg-fintech-dashboard-accent-blue/20"
            valueColor="text-fintech-dashboard-accent-blue"
          />
          <OverviewCard
            title="Income"
            value="₹45,000"
            change="+5% from last month"
            changeType="positive"
            icon={TrendingUp}
            iconBgColor="bg-fintech-dashboard-accent-green/20"
            valueColor="text-fintech-dashboard-accent-green"
          />
          <OverviewCard
            title="Expenses"
            value="₹20,000"
            change="-2% from last month"
            changeType="negative"
            icon={TrendingDown}
            iconBgColor="bg-fintech-dashboard-accent-red/20"
            valueColor="text-fintech-dashboard-accent-red"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spending Chart */}
          <div className="lg:col-span-2">
            <SpendingChart />
          </div>

          {/* Quick Transfer */}
          <div>
            <QuickTransfer />
          </div>
        </div>

        {/* New Row for Loan Tracking and AI Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Loan Tracking Card */}
          <div>
            <LoanTrackingCard />
          </div>

          {/* AI Balance Transfer Suggestions */}
          <div>
            <AiBalanceTransferSuggestions />
          </div>
        </div>

        {/* Bottom Content Grid (Existing + New Credit Card Utilization) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-1">
            <RecentTransactions />
          </div>

          {/* Goals Progress */}
          <div className="lg:col-span-1">
            <GoalsProgress />
          </div>

          {/* Credit Card Utilization Chart */}
          <div className="lg:col-span-1">
            <CreditCardUtilizationChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;