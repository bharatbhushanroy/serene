"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DollarSign, Percent, CalendarDays, Repeat } from 'lucide-react';

const RecurringDepositCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number | string>('');
  const [annualRate, setAnnualRate] = useState<number | string>(''); // Annual interest rate in percentage
  const [tenureMonths, setTenureMonths] = useState<number | string>(''); // Tenure in months

  const [maturityAmount, setMaturityAmount] = useState<number | null>(null);
  const [totalInvestment, setTotalInvestment] = useState<number | null>(null);
  const [totalInterestEarned, setTotalInterestEarned] = useState<number | null>(null);

  const calculateRD = () => {
    const P = Number(monthlyInvestment);
    const R_annual = Number(annualRate);
    const N_months = Number(tenureMonths);

    if (isNaN(P) || isNaN(R_annual) || isNaN(N_months) || P <= 0 || R_annual < 0 || N_months <= 0) {
      setMaturityAmount(null);
      setTotalInvestment(null);
      setTotalInterestEarned(null);
      return;
    }

    const R_monthly = R_annual / (12 * 100); // Monthly interest rate
    let calculatedMaturityAmount = 0;

    // Formula for Recurring Deposit (assuming monthly compounding)
    for (let i = 0; i < N_months; i++) {
      calculatedMaturityAmount += P * Math.pow((1 + R_monthly), (N_months - i));
    }

    const calculatedTotalInvestment = P * N_months;
    const calculatedTotalInterestEarned = calculatedMaturityAmount - calculatedTotalInvestment;

    setMaturityAmount(calculatedMaturityAmount);
    setTotalInvestment(calculatedTotalInvestment);
    setTotalInterestEarned(calculatedTotalInterestEarned);
  };

  const formatCurrency = (value: number | null | undefined) =>
    (value !== null && value !== undefined) ? `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A';

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-fintech-text-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-center text-white">
          Recurring Deposit <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Calculator</span>
        </h2>
        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white mb-4">Calculate Your RD Returns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="monthlyInvestment" className="text-fintech-text-muted mb-2 block flex items-center">
                <Repeat className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Monthly Investment (₹)
              </Label>
              <Input
                id="monthlyInvestment"
                type="number"
                placeholder="e.g., 5000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <div>
              <Label htmlFor="annualRate" className="text-fintech-text-muted mb-2 block flex items-center">
                <Percent className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Annual Interest Rate (%)
              </Label>
              <Input
                id="annualRate"
                type="number"
                placeholder="e.g., 6.5"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <div>
              <Label htmlFor="tenureMonths" className="text-fintech-text-muted mb-2 block flex items-center">
                <CalendarDays className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Tenure (Months)
              </Label>
              <Input
                id="tenureMonths"
                type="number"
                placeholder="e.g., 36"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <Button
              onClick={calculateRD}
              className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculate RD
            </Button>

            {maturityAmount !== null && (
              <div className="mt-8 space-y-4 text-white">
                <h3 className="text-xl font-bold">Calculation Results:</h3>
                <div className="flex justify-between items-center border-b border-fintech-border-light pb-2">
                  <p className="text-fintech-text-muted">Total Investment:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(totalInvestment)}</p>
                </div>
                <div className="flex justify-between items-center border-b border-fintech-border-light pb-2">
                  <p className="text-fintech-text-muted">Total Interest Earned:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(totalInterestEarned)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-fintech-text-muted">Maturity Amount:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(maturityAmount)}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecurringDepositCalculator;