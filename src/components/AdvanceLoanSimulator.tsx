import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const AdvanceLoanSimulator = () => {
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const [interestRate, setInterestRate] = useState<number | string>(''); // Annual interest rate in percentage
  const [loanTenure, setLoanTenure] = useState<number | string>(''); // Loan tenure in years

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayable, setTotalPayable] = useState<number | null>(null);

  const calculateEmi = () => {
    const P = Number(loanAmount);
    const R_annual = Number(interestRate);
    const N_years = Number(loanTenure);

    if (isNaN(P) || isNaN(R_annual) || isNaN(N_years) || P <= 0 || R_annual < 0 || N_years <= 0) {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayable(null);
      return;
    }

    const R_monthly = R_annual / (12 * 100); // Monthly interest rate
    const N_months = N_years * 12; // Loan tenure in months

    if (R_monthly === 0) {
      // Simple calculation for 0% interest
      const calculatedEmi = P / N_months;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalPayable(P);
    } else {
      const emiNumerator = P * R_monthly * Math.pow(1 + R_monthly, N_months);
      const emiDenominator = Math.pow(1 + R_monthly, N_months) - 1;
      const calculatedEmi = emiNumerator / emiDenominator;

      const calculatedTotalPayable = calculatedEmi * N_months;
      const calculatedTotalInterest = calculatedTotalPayable - P;

      setEmi(calculatedEmi);
      setTotalInterest(calculatedTotalInterest);
      setTotalPayable(calculatedTotalPayable);
    }
  };

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-qicky-text">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-center">
          Advance <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Loan Simulator</span>
        </h2>
        <Card className="bg-gradient-dark-card border border-qicky-border p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-qicky-text mb-4">Calculate Your EMI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="loanAmount" className="text-qicky-textmuted mb-2 block">Loan Amount (₹)</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="e.g., 500000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
              />
            </div>
            <div>
              <Label htmlFor="interestRate" className="text-qicky-textmuted mb-2 block">Annual Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                placeholder="e.g., 10"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
              />
            </div>
            <div>
              <Label htmlFor="loanTenure" className="text-qicky-textmuted mb-2 block">Loan Tenure (Years)</Label>
              <Input
                id="loanTenure"
                type="number"
                placeholder="e.g., 5"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
              />
            </div>
            <Button
              onClick={calculateEmi}
              className="w-full bg-gradient-button-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculate EMI
            </Button>

            {emi !== null && (
              <div className="mt-8 space-y-4 text-qicky-text">
                <h3 className="text-xl font-bold">Calculation Results:</h3>
                <div className="flex justify-between items-center border-b border-qicky-border pb-2">
                  <p className="text-qicky-textmuted">Monthly EMI:</p>
                  <p className="font-bold text-lg">₹ {emi.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center border-b border-qicky-border pb-2">
                  <p className="text-qicky-textmuted">Total Interest Payable:</p>
                  <p className="font-bold text-lg">₹ {totalInterest?.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-qicky-textmuted">Total Payable Amount:</p>
                  <p className="font-bold text-lg">₹ {totalPayable?.toFixed(2)}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdvanceLoanSimulator;