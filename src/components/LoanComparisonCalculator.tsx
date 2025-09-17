import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Helper function to calculate EMI
const calculateLoanEmi = (principal: number, annualRate: number, years: number) => {
  if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate < 0 || years <= 0) {
    return { emi: null, totalInterest: null, totalPayable: null };
  }

  const monthlyRate = annualRate / (12 * 100);
  const months = years * 12;

  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalInterest: 0, totalPayable: principal };
  } else {
    const emiNumerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const emiDenominator = Math.pow(1 + monthlyRate, months) - 1;
    const emi = emiNumerator / emiDenominator;
    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;
    return { emi, totalInterest, totalPayable };
  }
};

const LoanComparisonCalculator = () => {
  // State for Loan A
  const [loanAAmount, setLoanAAmount] = useState<number | string>('');
  const [loanARate, setLoanARate] = useState<number | string>('');
  const [loanATenure, setLoanATenure] = useState<number | string>('');
  const [loanAResults, setLoanAResults] = useState<{ emi: number | null; totalInterest: number | null; totalPayable: number | null } | null>(null);

  // State for Loan B
  const [loanBAmount, setLoanBAmount] = useState<number | string>('');
  const [loanBRate, setLoanBRate] = useState<number | string>('');
  const [loanBTenure, setLoanBTenure] = useState<number | string>('');
  const [loanBResults, setLoanBResults] = useState<{ emi: number | null; totalInterest: number | null; totalPayable: number | null } | null>(null);

  const compareLoans = () => {
    const resultsA = calculateLoanEmi(Number(loanAAmount), Number(loanARate), Number(loanATenure));
    const resultsB = calculateLoanEmi(Number(loanBAmount), Number(loanBRate), Number(loanBTenure));
    setLoanAResults(resultsA);
    setLoanBResults(resultsB);
  };

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-qicky-text">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-center">
          Loan <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">Comparison Calculator</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Loan A Input Card */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-qicky-text mb-4">Loan A Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="loanAAmount" className="text-qicky-textmuted mb-2 block">Loan Amount (₹)</Label>
                <Input
                  id="loanAAmount"
                  type="number"
                  placeholder="e.g., 500000"
                  value={loanAAmount}
                  onChange={(e) => setLoanAAmount(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <div>
                <Label htmlFor="loanARate" className="text-qicky-textmuted mb-2 block">Annual Interest Rate (%)</Label>
                <Input
                  id="loanARate"
                  type="number"
                  placeholder="e.g., 10"
                  value={loanARate}
                  onChange={(e) => setLoanARate(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <div>
                <Label htmlFor="loanATenure" className="text-qicky-textmuted mb-2 block">Loan Tenure (Years)</Label>
                <Input
                  id="loanATenure"
                  type="number"
                  placeholder="e.g., 5"
                  value={loanATenure}
                  onChange={(e) => setLoanATenure(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div
            </CardContent>
          </Card>

          {/* Loan B Input Card */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-qicky-text mb-4">Loan B Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="loanBAmount" className="text-qicky-textmuted mb-2 block">Loan Amount (₹)</Label>
                <Input
                  id="loanBAmount"
                  type="number"
                  placeholder="e.g., 600000"
                  value={loanBAmount}
                  onChange={(e) => setLoanBAmount(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <div>
                <Label htmlFor="loanBRate" className="text-qicky-textmuted mb-2 block">Annual Interest Rate (%)</Label>
                <Input
                  id="loanBRate"
                  type="number"
                  placeholder="e.g., 9"
                  value={loanBRate}
                  onChange={(e) => setLoanBRate(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <div>
                <Label htmlFor="loanBTenure" className="text-qicky-textmuted mb-2 block">Loan Tenure (Years)</Label>
                <Input
                  id="loanBTenure"
                  type="number"
                  placeholder="e.g., 7"
                  value={loanBTenure}
                  onChange={(e) => setLoanBTenure(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center max-w-4xl mx-auto">
          <Button
            onClick={compareLoans}
            className="w-full lg:w-auto bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Compare Loans
          </Button>
        </div>

        {(loanAResults?.emi !== null || loanBResults?.emi !== null) && (
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-qicky-text mb-6 text-center">Comparison Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Results for Loan A */}
              <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-qicky-text mb-4">Loan A</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-qicky-text">
                  <div className="flex justify-between items-center border-b border-qicky-blue/30 pb-2">
                    <p className="text-qicky-textmuted">Monthly EMI:</p>
                    <p className="font-bold text-lg">
                      {loanAResults?.emi !== null ? `₹ ${loanAResults.emi.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-b border-qicky-blue/30 pb-2">
                    <p className="text-qicky-textmuted">Total Interest Payable:</p>
                    <p className="font-bold text-lg">
                      {loanAResults?.totalInterest !== null ? `₹ ${loanAResults.totalInterest.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-qicky-textmuted">Total Payable Amount:</p>
                    <p className="font-bold text-lg">
                      {loanAResults?.totalPayable !== null ? `₹ ${loanAResults.totalPayable.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results for Loan B */}
              <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-qicky-text mb-4">Loan B</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-qicky-text">
                  <div className="flex justify-between items-center border-b border-qicky-blue/30 pb-2">
                    <p className="text-qicky-textmuted">Monthly EMI:</p>
                    <p className="font-bold text-lg">
                      {loanBResults?.emi !== null ? `₹ ${loanBResults.emi.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-b border-qicky-blue/30 pb-2">
                    <p className="text-qicky-textmuted">Total Interest Payable:</p>
                    <p className="font-bold text-lg">
                      {loanBResults?.totalInterest !== null ? `₹ ${loanBResults.totalInterest.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-qicky-textmuted">Total Payable Amount:</p>
                    <p className="font-bold text-lg">
                      {loanBResults?.totalPayable !== null ? `₹ ${loanBResults.totalPayable.toFixed(2)}` : 'N/A'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanComparisonCalculator;