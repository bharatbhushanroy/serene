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
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-gradient-dark-card border border-qicky-border p-8 rounded-xl shadow-lg max-w-2xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-qicky-text mb-4">
              Apply for a <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Loan</span>
            </CardTitle>
            <p className="text-qicky-textmuted text-lg">Fill out the form below to get started with your loan application.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-qicky-textmuted mb-2 block">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-qicky-textmuted mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
                />
              </div>
              <div>
                <Label htmlFor="loanAmount" className="text-qicky-textmuted mb-2 block">Desired Loan Amount (₹)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="e.g., 100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
                />
              </div>
              <div>
                <Label htmlFor="loanPurpose" className="text-qicky-textmuted mb-2 block">Purpose of Loan</Label>
                <Select value={loanPurpose} onValueChange={setLoanPurpose}>
                  <SelectTrigger className="w-full bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple">
                    <SelectValue placeholder="Select a purpose" />
                  </SelectTrigger>
                  <SelectContent className="bg-qicky-dark border-qicky-border text-qicky-text">
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
                <Label htmlFor="income" className="text-qicky-textmuted mb-2 block">Monthly Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="e.g., 50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
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