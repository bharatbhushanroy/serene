"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, Clock, DollarSign, TrendingUp, CalendarDays, Pause, FastForward, ArrowRight } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router-dom';

interface ChartDataPoint {
  month: number;
  remainingBalance: number;
  totalPaid: number;
}

interface InteractiveLoanSimulatorSectionProps {
  isMobile: boolean; // Add isMobile prop
}

const InteractiveLoanSimulatorSection: React.FC<InteractiveLoanSimulatorSectionProps> = ({ isMobile }) => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10.5); // Annual interest rate in percentage
  const [loanTenure, setLoanTenure] = useState<number>(24); // Loan tenure in months
  const [loanType, setLoanType] = useState<string>('personal');

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayable, setTotalPayable] = useState<number | null>(null);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  const [currentMonth, setCurrentMonth] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'normal' | 'fast'>('normal');
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatCurrency = (value: number | null | undefined) =>
    (value !== null && value !== undefined) ? `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : 'N/A';

  const calculateLoanDetails = (
    principal: number,
    annualRate: number,
    months: number
  ) => {
    if (isNaN(principal) || isNaN(annualRate) || isNaN(months) || principal <= 0 || annualRate < 0 || months <= 0) {
      return { emi: null, totalInterest: null, totalPayable: null, chartData: [] };
    }

    const monthlyRate = annualRate / (12 * 100);
    let calculatedEmi: number;
    let calculatedTotalPayable: number;
    let calculatedTotalInterest: number;

    if (monthlyRate === 0) {
      calculatedEmi = principal / months;
      calculatedTotalInterest = 0;
      calculatedTotalPayable = principal;
    } else {
      const emiNumerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
      const emiDenominator = Math.pow(1 + monthlyRate, months) - 1;
      calculatedEmi = emiNumerator / emiDenominator;
      calculatedTotalPayable = calculatedEmi * months;
      calculatedTotalInterest = calculatedTotalPayable - principal;
    }

    const data: ChartDataPoint[] = [];
    let remainingPrincipal = principal;
    let cumulativePaid = 0;

    for (let month = 0; month <= months; month++) {
      if (month === 0) {
        data.push({ month: 0, remainingBalance: principal, totalPaid: 0 });
        continue;
      }

      const interestForMonth = remainingPrincipal * monthlyRate;
      const principalPaidForMonth = calculatedEmi - interestForMonth;

      remainingPrincipal -= principalPaidForMonth;
      cumulativePaid += calculatedEmi;

      data.push({
        month,
        remainingBalance: Math.max(0, remainingPrincipal), // Ensure it doesn't go negative
        totalPaid: Math.min(calculatedTotalPayable, cumulativePaid), // Ensure it doesn't exceed total payable
      });
    }

    return {
      emi: calculatedEmi,
      totalInterest: calculatedTotalInterest,
      totalPayable: calculatedTotalPayable,
      chartData: data,
    };
  };

  useEffect(() => {
    const { emi, totalInterest, totalPayable, chartData } = calculateLoanDetails(
      loanAmount,
      interestRate,
      loanTenure
    );
    setEmi(emi);
    setTotalInterest(totalInterest);
    setTotalPayable(totalPayable);
    setChartData(chartData);
    setCurrentMonth(0); // Reset animation when parameters change
    setAnimationPaused(false); // Restart animation
  }, [loanAmount, interestRate, loanTenure]);

  useEffect(() => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }

    if (!animationPaused && chartData.length > 0) { // Animations will now run on all devices
      const speed = animationSpeed === 'normal' ? 200 : 50; // milliseconds
      animationIntervalRef.current = setInterval(() => {
        setCurrentMonth((prevMonth) => {
          if (prevMonth >= loanTenure) {
            clearInterval(animationIntervalRef.current!);
            return loanTenure;
          }
          return prevMonth + 1;
        });
      }, speed);
    }

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [animationPaused, animationSpeed, chartData, loanTenure, isMobile]);

  const displayedChartData = chartData.slice(0, currentMonth + 1);

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
          Try Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Interactive Loan Simulator</span>
        </h2>

        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10">
          <CardHeader className="text-left mb-8">
            <div className="flex items-center mb-2">
              <Wallet className="h-8 w-8 text-fintech-blue-accent mr-3" />
              <CardTitle className="text-3xl font-bold text-white">Interactive Loan Simulator</CardTitle>
            </div>
            <p className="text-fintech-text-muted text-lg">
              Visualize how your loan evolves over time as you adjust different parameters.
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel: Inputs */}
            <div className="space-y-8 text-left">
              {/* Loan Type */}
              <div>
                <Label htmlFor="loanType" className="text-fintech-text-muted flex items-center mb-2">
                  <Clock className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Loan Type
                </Label>
                <Select value={loanType} onValueChange={setLoanType}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="personal">Personal Loan</SelectItem>
                    <SelectItem value="home">Home Loan</SelectItem>
                    <SelectItem value="car">Car Loan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanAmount" className="text-fintech-text-muted flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-fintech-green-success" /> Loan Amount
                  </Label>
                  <span className="text-lg font-semibold text-white">{formatCurrency(loanAmount)}</span>
                </div>
                <Slider
                  id="loanAmount"
                  min={10000}
                  max={500000}
                  step={10000}
                  value={[loanAmount]}
                  onValueChange={(val) => setLoanAmount(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-blue-accent [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                />
                <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                  <span>₹10,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="interestRate" className="text-fintech-text-muted flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-fintech-gradient-pink-start" /> Interest Rate
                  </Label>
                  <span className="text-lg font-semibold text-white">{interestRate.toFixed(2)}%</span>
                </div>
                <Slider
                  id="interestRate"
                  min={5}
                  max={20}
                  step={0.5}
                  value={[interestRate]}
                  onValueChange={(val) => setInterestRate(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-gradient-pink-start [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-gradient-pink-start [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-gradient-pink-start"
                />
                <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                  <span>5.00%</span>
                  <span>20.00%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="loanTenure" className="text-fintech-text-muted flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-fintech-blue-soft" /> Loan Tenure
                  </Label>
                  <span className="text-lg font-semibold text-white">{loanTenure} months</span>
                </div>
                <Slider
                  id="loanTenure"
                  min={6}
                  max={60}
                  step={6}
                  value={[loanTenure]}
                  onValueChange={(val) => setLoanTenure(val[0])}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-blue-soft [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-soft [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-soft"
                />
                <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                  <span>6 months</span>
                  <span>60 months</span>
                </div>
              </div>

              {/* Animation Controls */}
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setAnimationPaused(!animationPaused)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  {animationPaused ? <PlayIcon className="h-4 w-4 mr-2" /> : <Pause className="h-4 w-4 mr-2" />}
                  {animationPaused ? 'Resume Animation' : 'Pause Animation'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setAnimationSpeed(animationSpeed === 'normal' ? 'fast' : 'normal')}
                  className="flex-1 bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <FastForward className="h-4 w-4 mr-2" />
                  {animationSpeed === 'normal' ? 'Fast' : 'Normal'}
                </Button>
              </div>
            </div>

            {/* Right Panel: Summary and Chart */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-800 border-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-fintech-text-muted mb-1">Monthly Payment</p>
                  <p className="text-2xl font-bold text-fintech-blue-accent">{formatCurrency(emi)}</p>
                </Card>
                <Card className="bg-gray-800 border-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-fintech-text-muted mb-1">Total Interest</p>
                  <p className="text-2xl font-bold text-fintech-gradient-pink-start">{formatCurrency(totalInterest)}</p>
                </Card>
                <Card className="bg-gray-800 border-gray-700 p-4 rounded-lg text-center">
                  <p className="text-sm text-fintech-text-muted mb-1">Total Payment</p>
                  <p className="text-2xl font-bold text-fintech-green-success">{formatCurrency(totalPayable)}</p>
                </Card>
              </div>

              <div className="h-80 bg-gray-800 rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={displayedChartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" tickFormatter={(value) => `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} />
                    <Tooltip
                      formatter={(value: number) => `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                      labelFormatter={(label: number) => `Month: ${label}`}
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#E5E7EB' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Line
                      type="monotone"
                      dataKey="remainingBalance"
                      stroke="#EC4899" // Pink
                      strokeWidth={2}
                      dot={false}
                      name="Remaining Balance"
                    />
                    <Line
                      type="monotone"
                      dataKey="totalPaid"
                      stroke="#10B981" // Green
                      strokeWidth={2}
                      dot={false}
                      name="Total Paid"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <Link to="/apply-loan" className="block">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group"
                >
                  Apply for Personal Loan Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Simple Play icon for the pause/resume button
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default InteractiveLoanSimulatorSection;