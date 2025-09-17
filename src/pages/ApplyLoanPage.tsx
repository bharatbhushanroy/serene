"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess, showError } from '@/utils/toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ApplyLoanPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this data would be sent to a loan processing service.
    // For now, we'll just log it and show a toast notification.
    console.log({ fullName, email, loanAmount, loanPurpose, income });

    if (fullName && email && loanAmount && loanPurpose && income) {
      showSuccess("Your loan application has been submitted successfully!");
      setFullName('');
      setEmail('');
      setLoanAmount('');
      setLoanPurpose('');
      setIncome('');
    } else {
      showError("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-gradient-dark-card border border-brand-border p-8 rounded-xl shadow-lg max-w-2xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-brand-text mb-4">
              Apply for a <span className="bg-gradient-to-r from-brand-orange to-brand-light-orange text-transparent bg-clip-text">Loan</span>
            </CardTitle>
            <p className="text-brand-text-muted text-lg">Fill out the form below to get started with your loan application.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-brand-text-muted mb-2 block">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-brand-dark border-brand-border text-brand-text focus:border-brand-orange"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-brand-text-muted mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-brand-dark border-brand-border text-brand-text focus:border-brand-orange"
                />
              </div>
              <div>
                <Label htmlFor="loanAmount" className="text-brand-text-muted mb-2 block">Desired Loan Amount (₹)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="e.g., 100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="bg-brand-dark border-brand-border text-brand-text focus:border-brand-orange"
                />
              </div>
              <div>
                <Label htmlFor="loanPurpose" className="text-brand-text-muted mb-2 block">Purpose of Loan</Label>
                <Select value={loanPurpose} onValueChange={setLoanPurpose}>
                  <SelectTrigger className="w-full bg-brand-dark border-brand-border text-brand-text focus:border-brand-orange">
                    <SelectValue placeholder="Select a purpose" />
                  </SelectTrigger>
                  <SelectContent className="bg-brand-dark border-brand-border text-brand-text">
                    <SelectItem value="personal">Personal Expenses</SelectItem>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="home_improvement">Home Improvement</SelectItem>
                    <SelectItem value="debt_consolidation">Debt Consolidation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="income" className="text-brand-text-muted mb-2 block">Monthly Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="e.g., 50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="bg-brand-dark border-brand-border text-brand-text focus:border-brand-orange"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ApplyLoanPage;