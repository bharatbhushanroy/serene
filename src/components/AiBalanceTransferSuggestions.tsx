"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight, CreditCard, DollarSign } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const AiBalanceTransferSuggestions = () => {
  const mockHighInterestDebt = 50000; // Example high-interest debt
  const potentialSavings = 2500; // Example potential savings

  const handleSuggestBalanceTransfer = () => {
    showSuccess("AI is analyzing your finances for optimal balance transfer options!");
    // In a real app, this would trigger an API call or a more complex simulation
  };

  return (
    <Card className="bg-fintech-simulator-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-fintech-dashboard-accent-blue" /> AI Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-fintech-dashboard-border rounded-lg">
          <CreditCard className="h-6 w-6 text-fintech-dashboard-accent-red" />
          <div>
            <p className="font-medium text-fintech-dashboard-text-primary">High-interest Credit Card Debt Detected!</p>
            <p className="text-sm text-fintech-dashboard-text-secondary">
              You have ₹{mockHighInterestDebt.toLocaleString()} on a card with high interest.
            </p>
          </div>
        </div>

        <div className="p-4 bg-fintech-dashboard-accent-green/10 border border-fintech-dashboard-accent-green/30 rounded-lg text-center">
          <p className="text-sm text-fintech-dashboard-text-secondary mb-2">Potential Savings with Balance Transfer:</p>
          <p className="text-3xl font-bold text-fintech-dashboard-accent-green flex items-center justify-center">
            <DollarSign className="h-7 w-7 mr-2" /> ₹{potentialSavings.toLocaleString()}
          </p>
          <p className="text-xs text-fintech-dashboard-text-secondary mt-1">over 12 months</p>
        </div>

        <Button
          onClick={handleSuggestBalanceTransfer}
          className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group"
        >
          Explore Balance Transfer <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default AiBalanceTransferSuggestions;