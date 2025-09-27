"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Car, Percent, CalendarDays, DollarSign } from 'lucide-react';

const CarLoanEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const [interestRate, setInterestRate] = useState<number | string>(''); // Annual interest rate in percentage
  const [loanTenure, setLoanTenure] = useState<number | string>(''); // Loan tenure in months

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayable, setTotalPayable] = useState<number | null>(null);

  const calculateEmi = () => {
    const P = Number(loanAmount);
    const R_annual = Number(interestRate);
    const N_months = Number(loanTenure);

    if (isNaN(P) || isNaN(R_annual) || isNaN(N_months) || P <= 0 || R_annual < 0 || N_months <= 0) {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayable(null);
      return;
    }

    const R_monthly = R_annual / (12 * 100); // Monthly interest rate

    let calculatedEmi: number;
    let calculatedTotalPayable: number;
    let calculatedTotalInterest: number;

    if (R_monthly === 0) {
      // Simple calculation for 0% interest
      calculatedEmi = P / N_months;
      calculatedTotalInterest = 0;
      calculatedTotalPayable = P;
    } else {
      const emiNumerator = P * R_monthly * Math.pow(1 + R_monthly, N_months);
      const emiDenominator = Math.pow(1 + R_monthly, N_months) - 1;
      calculatedEmi = emiNumerator / emiDenominator;

      calculatedTotalPayable = calculatedEmi * N_months;
      calculatedTotalInterest = calculatedTotalPayable - P;
    }

    setEmi(calculatedEmi);
    setTotalInterest(calculatedTotalInterest);
    setTotalPayable(calculatedTotalPayable);
  };

  const formatCurrency = (value: number | null | undefined) =>
    (value !== null && value !== undefined) ? `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A';

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-fintech-text-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-center text-white">
          Car Loan EMI <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Calculator</span>
        </h2>
        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white mb-4">Calculate Your Car Loan EMI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="loanAmount" className="text-fintech-text-muted mb-2 block flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Amount (₹)
              </Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="e.g., 500000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <div>
              <Label htmlFor="interestRate" className="text-fintech-text-muted mb-2 block flex items-center">
                <Percent className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Annual Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                placeholder="e.g., 9.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <div>
              <Label htmlFor="loanTenure" className="text-fintech-text-muted mb-2 block flex items-center">
                <CalendarDays className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Tenure (Months)
              </Label>
              <Input
                id="loanTenure"
                type="number"
                placeholder="e.g., 60"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
              />
            </div>
            <Button
              onClick={calculateEmi}
              className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculate EMI
            </Button>

            {emi !== null && (
              <div className="mt-8 space-y-4 text-white">
                <h3 className="text-xl font-bold">Calculation Results:</h3>
                <div className="flex justify-between items-center border-b border-fintech-border-light pb-2">
                  <p className="text-fintech-text-muted">Monthly EMI:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(emi)}</p>
                </div>
                <div className="flex justify-between items-center border-b border-fintech-border-light pb-2">
                  <p className="text-fintech-text-muted">Total Interest Payable:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(totalInterest)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-fintech-text-muted">Total Payable Amount:</p>
                  <p className="font-bold text-lg">₹ {formatCurrency(totalPayable)}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CarLoanEMICalculator;