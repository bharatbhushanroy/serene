"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { showSuccess, showError } from '@/utils/toast';
import { DollarSign, TrendingUp, User, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CheckEligibilitySection = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(30000);
  const [creditScore, setCreditScore] = useState<string>('good');
  const [employmentType, setEmploymentType] = useState<string>('salaried');

  const formatCurrency = (value: number) => `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const handleCheckEligibility = () => {
    let eligible = true;
    let message = "Congratulations! You are likely eligible for a loan.";

    if (loanAmount > 500000 && monthlyIncome < 50000) {
      eligible = false;
      message = "Your desired loan amount might be too high for your current monthly income.";
    } else if (monthlyIncome < 20000) {
      eligible = false;
      message = "Your monthly income is below our minimum requirement.";
    } else if (creditScore === 'poor') {
      eligible = false;
      message = "Your credit score is too low for approval at this time.";
    } else if (creditScore === 'fair' && monthlyIncome < 40000) {
      eligible = false;
      message = "With a fair credit score, a higher income is usually required.";
    } else if (employmentType === 'student' && monthlyIncome < 30000) {
      eligible = false;
      message = "Students typically require a higher income or co-applicant for approval.";
    }

    if (eligible) {
      showSuccess(message);
    } else {
      showError(message);
    }
  };

  const dollarSignVariants = {
    animate: (i: number) => ({
      y: [0, -20 - i * 5, 0],
      x: [0, 10 + i * 2, -10 - i * 2, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, 15 + i * 3, -15 - i * 3, 0],
      x: [0, -10 - i * 2, 10 + i * 2, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 12 + i * 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: i * 0.7,
      },
    }),
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      {/* Animated Background Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={`ds-${i}`}
          custom={i}
          variants={dollarSignVariants}
          animate="animate"
          className="absolute text-4xl font-bold text-white/10"
          style={{
            top: `${10 + i * 15}%`,
            left: `${10 + i * 18}%`,
            fontSize: `${24 + i * 4}px`,
          }}
        >
          ₹
        </motion.span>
      ))}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          custom={i}
          variants={dotVariants}
          animate="animate"
          className="absolute w-3 h-3 rounded-full bg-white/10"
          style={{
            top: `${5 + i * 12}%`,
            right: `${5 + i * 10}%`,
            width: `${8 + i * 2}px`,
            height: `${8 + i * 2}px`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Check Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Eligibility</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto">
          Find out if you qualify for a Qicky loan in just a few simple steps. Get an instant assessment without affecting your credit score.
        </p>

        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-2xl mx-auto">
          <CardHeader className="text-left mb-8">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-8 w-8 text-fintech-green-success mr-3" />
              <CardTitle className="text-3xl font-bold text-white">Eligibility Assessment</CardTitle>
            </div>
            <p className="text-fintech-text-muted text-lg">
              Provide a few details to see your loan eligibility.
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-left">
            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="loanAmount" className="text-fintech-text-muted flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-fintech-blue-accent" /> Desired Loan Amount
                </Label>
                <span className="text-lg font-semibold text-white">{formatCurrency(loanAmount)}</span>
              </div>
              <Slider
                id="loanAmount"
                min={10000}
                max={1000000}
                step={10000}
                value={[loanAmount]}
                onValueChange={(val) => setLoanAmount(val[0])}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-blue-accent [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
              />
              <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                <span>₹10,000</span>
                <span>₹10,00,000</span>
              </div>
            </div>

            {/* Monthly Income */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="monthlyIncome" className="text-fintech-text-muted flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-fintech-green-success" /> Monthly Income
                </Label>
                <span className="text-lg font-semibold text-white">{formatCurrency(monthlyIncome)}</span>
              </div>
              <Slider
                id="monthlyIncome"
                min={10000}
                max={200000}
                step={5000}
                value={[monthlyIncome]}
                onValueChange={(val) => setMonthlyIncome(val[0])}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-green-success [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-green-success [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-green-success"
              />
              <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                <span>₹10,000</span>
                <span>₹2,00,000</span>
              </div>
            </div>

            {/* Credit Score */}
            <div>
              <Label htmlFor="creditScore" className="text-fintech-text-muted flex items-center mb-2">
                <User className="h-5 w-5 mr-2 text-fintech-blue-soft" /> Credit Score
              </Label>
              <Select value={creditScore} onValueChange={setCreditScore}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                  <SelectValue placeholder="Select credit score" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="excellent">Excellent (750+)</SelectItem>
                  <SelectItem value="good">Good (700-749)</SelectItem>
                  <SelectItem value="fair">Fair (650-699)</SelectItem>
                  <SelectItem value="poor">Poor (Below 650)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Employment Type */}
            <div>
              <Label htmlFor="employmentType" className="text-fintech-text-muted flex items-center mb-2">
                <Briefcase className="h-5 w-5 mr-2 text-fintech-gradient-pink-start" /> Employment Type
              </Label>
              <Select value={employmentType} onValueChange={setEmploymentType}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="salaried">Salaried</SelectItem>
                  <SelectItem value="self-employed">Self-Employed</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleCheckEligibility}
              className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
            >
              Check Eligibility <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CheckEligibilitySection;