import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider'; // Assuming shadcn/ui Slider
import { DollarSign, Zap, CalendarDays, TrendingUp } from 'lucide-react';
import CircularProgressBar from './CircularProgressBar'; // Import the new component

// Helper function to calculate EMI and efficiency
const calculateLoanDetails = (principal: number, annualRate: number, years: number) => {
  if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate < 0 || years <= 0) {
    return { emi: null, totalInterest: null, totalPayable: null, loanEfficiency: null };
  }

  const monthlyRate = annualRate / (12 * 100);
  const months = years * 12;

  let emi: number;
  let totalPayable: number;
  let totalInterest: number;

  if (monthlyRate === 0) {
    emi = principal / months;
    totalInterest = 0;
    totalPayable = principal;
  } else {
    const emiNumerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const emiDenominator = Math.pow(1 + monthlyRate, months) - 1;
    emi = emiNumerator / emiDenominator;
    totalPayable = emi * months;
    totalInterest = totalPayable - principal;
  }

  const loanEfficiency = (principal / totalPayable) * 100;

  return { emi, totalInterest, totalPayable, loanEfficiency };
};

const LoanComparisonCalculator = () => {
  // State for Loan A
  const [loanAAmount, setLoanAAmount] = useState<number>(100000);
  const [loanARate, setLoanARate] = useState<number>(12);
  const [loanATenure, setLoanATenure] = useState<number>(24); // in months

  // State for Loan B
  const [loanBAmount, setLoanBAmount] = useState<number>(100000);
  const [loanBRate, setLoanBRate] = useState<number>(10);
  const [loanBTenure, setLoanBTenure] = useState<number>(36); // in months

  const [loanAResults, setLoanAResults] = useState<ReturnType<typeof calculateLoanDetails> | null>(null);
  const [loanBResults, setLoanBResults] = useState<ReturnType<typeof calculateLoanDetails> | null>(null);

  useEffect(() => {
    const resultsA = calculateLoanDetails(loanAAmount, loanARate, loanATenure / 12);
    const resultsB = calculateLoanDetails(loanBAmount, loanBRate, loanBTenure / 12);
    setLoanAResults(resultsA);
    setLoanBResults(resultsB);
  }, [loanAAmount, loanARate, loanATenure, loanBAmount, loanBRate, loanBTenure]);

  // Updated formatCurrency to handle undefined as well
  const formatCurrency = (value: number | null | undefined) =>
    (value !== null && value !== undefined) ? `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : 'N/A';

  const getRateBadge = (rate: number) => {
    if (rate <= 8) return <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-fintech-green-success text-white">Excellent</span>;
    if (rate <= 12) return <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white">Good</span>;
    if (rate <= 16) return <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white">Fair</span>;
    return <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">High</span>;
  };

  const getDifferenceColor = (diff: number) => {
    if (diff < 0) return 'text-fintech-green-success';
    if (diff > 0) return 'text-red-500';
    return 'text-fintech-text-muted';
  };

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-fintech-text-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Loan Inputs */}
        <div className="space-y-8">
          {/* Loan 1 Card */}
          <Card className="bg-gradient-card-light border border-fintech-border-light p-6 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-fintech-text-dark mb-6">Loan 1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanAAmount" className="text-fintech-text-muted flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Amount
                  </Label>
                  <span className="text-lg font-semibold text-fintech-text-dark">{formatCurrency(loanAAmount)}</span>
                </div>
                <Slider
                  id="loanAAmount"
                  min={10000}
                  max={1000000}
                  step={10000}
                  value={[loanAAmount]}
                  onValueChange={(val) => setLoanAAmount(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanARate" className="text-fintech-text-muted flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Interest Rate
                  </Label>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-fintech-text-dark">{loanARate}%</span>
                    {getRateBadge(loanARate)}
                  </div>
                </div>
                <Slider
                  id="loanARate"
                  min={5}
                  max={25}
                  step={0.5}
                  value={[loanARate]}
                  onValueChange={(val) => setLoanARate(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanATenure" className="text-fintech-text-muted flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Tenure (Months)
                  </Label>
                  <span className="text-lg font-semibold text-fintech-text-dark">{loanATenure} months</span>
                </div>
                <Slider
                  id="loanATenure"
                  min={6}
                  max={120}
                  step={6}
                  value={[loanATenure]}
                  onValueChange={(val) => setLoanATenure(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Loan 2 Card */}
          <Card className="bg-gradient-card-light border border-fintech-border-light p-6 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-fintech-text-dark mb-6">Loan 2</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanBAmount" className="text-fintech-text-muted flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Amount
                  </Label>
                  <span className="text-lg font-semibold text-fintech-text-dark">{formatCurrency(loanBAmount)}</span>
                </div>
                <Slider
                  id="loanBAmount"
                  min={10000}
                  max={1000000}
                  step={10000}
                  value={[loanBAmount]}
                  onValueChange={(val) => setLoanBAmount(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanBRate" className="text-fintech-text-muted flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Interest Rate
                  </Label>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-fintech-text-dark">{loanBRate}%</span>
                    {getRateBadge(loanBRate)}
                  </div>
                </div>
                <Slider
                  id="loanBRate"
                  min={5}
                  max={25}
                  step={0.5}
                  value={[loanBRate]}
                  onValueChange={(val) => setLoanBRate(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanBTenure" className="text-fintech-text-muted flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Tenure (Months)
                  </Label>
                  <span className="text-lg font-semibold text-fintech-text-dark">{loanBTenure} months</span>
                </div>
                <Slider
                  id="loanBTenure"
                  min={6}
                  max={120}
                  step={6}
                  value={[loanBTenure]}
                  onValueChange={(val) => setLoanBTenure(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-fintech-blue-accent [&>span:first-child]:to-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Loan Comparison Results */}
        <Card className="bg-gradient-card-light border border-fintech-border-light p-6 rounded-xl shadow-lg h-fit">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-fintech-text-dark mb-6">Loan Comparison</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* EMI (Monthly Payment) */}
            <Card className="bg-fintech-background-offwhite border border-fintech-border-light/50 p-4 rounded-lg">
              <h4 className="text-fintech-text-muted text-sm mb-2">EMI (Monthly Payment)</h4>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanAResults?.emi)}
                </span>
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanBResults?.emi)}
                </span>
              </div>
              {loanAResults && loanBResults && loanAResults.emi !== null && loanBResults.emi !== null && (
                <p className="text-xs text-fintech-text-muted">
                  Difference: <span className={getDifferenceColor(loanAResults.emi - loanBResults.emi)}>
                    {formatCurrency(Math.abs(loanAResults.emi - loanBResults.emi))}
                  </span>
                </p>
              )}
            </Card>

            {/* Total Interest */}
            <Card className="bg-fintech-background-offwhite border border-fintech-border-light/50 p-4 rounded-lg">
              <h4 className="text-fintech-text-muted text-sm mb-2">Total Interest</h4>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanAResults?.totalInterest)}
                </span>
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanBResults?.totalInterest)}
                </span>
              </div>
              {loanAResults && loanBResults && loanAResults.totalInterest !== null && loanBResults.totalInterest !== null && (
                <p className="text-xs text-fintech-text-muted">
                  Difference: <span className={getDifferenceColor(loanAResults.totalInterest - loanBResults.totalInterest)}>
                    {formatCurrency(Math.abs(loanAResults.totalInterest - loanBResults.totalInterest))}
                  </span>
                </p>
              )}
            </Card>

            {/* Total Payment */}
            <Card className="bg-fintech-background-offwhite border border-fintech-border-light/50 p-4 rounded-lg">
              <h4 className="text-fintech-text-muted text-sm mb-2">Total Payment</h4>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanAResults?.totalPayable)}
                </span>
                <span className="text-fintech-blue-accent font-bold text-xl">
                  {formatCurrency(loanBResults?.totalPayable)}
                </span>
              </div>
              {loanAResults && loanBResults && loanAResults.totalPayable !== null && loanBResults.totalPayable !== null && (
                <p className="text-xs text-fintech-text-muted">
                  Difference: <span className={getDifferenceColor(loanAResults.totalPayable - loanBResults.totalPayable)}>
                    {formatCurrency(Math.abs(loanAResults.totalPayable - loanBResults.totalPayable))}
                  </span>
                </p>
              )}
            </Card>

            {/* Loan Efficiency */}
            <Card className="bg-fintech-background-offwhite border border-fintech-border-light/50 p-4 rounded-lg">
              <h4 className="text-fintech-text-muted text-sm mb-2">Loan Efficiency</h4>
              <div className="flex justify-around items-center h-full">
                <div className="flex flex-col items-center">
                  <CircularProgressBar
                    percentage={loanAResults?.loanEfficiency ?? 0}
                    progressClassName="stroke-fintech-blue-accent"
                  />
                  <span className="text-fintech-text-muted text-xs mt-1">Loan 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <CircularProgressBar
                    percentage={loanBResults?.loanEfficiency ?? 0}
                    progressClassName="stroke-fintech-blue-accent"
                  />
                  <span className="text-fintech-text-muted text-xs mt-1">Loan 2</span>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoanComparisonCalculator;