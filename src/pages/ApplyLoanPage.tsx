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
import { ArrowRight } from 'lucide-react';

const ApplyLoanPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [desiredLoanAmount, setDesiredLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phoneNumber || !desiredLoanAmount || !loanPurpose || !message) {
      showError("Please fill in all fields.");
      return;
    }

    console.log({ fullName, email, phoneNumber, desiredLoanAmount, loanPurpose, message });
    showSuccess("Your loan application has been submitted successfully!");
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setDesiredLoanAmount('');
    setLoanPurpose('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-fintech-main-bg text-white hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4">
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Loan</span> Now
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-10 max-w-3xl mx-auto">
          Complete the form below to get started with your loan application. Our team will review your application and get back to you within 24 hours.
        </p>

        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-2xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white mb-6">Loan Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-fintech-text-muted mb-2 block">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-fintech-text-muted mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-fintech-text-muted mb-2 block">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="desiredLoanAmount" className="text-fintech-text-muted mb-2 block">Desired Loan Amount (₹)</Label>
                <Input
                  id="desiredLoanAmount"
                  type="number"
                  placeholder="e.g., 50000"
                  value={desiredLoanAmount}
                  onChange={(e) => setDesiredLoanAmount(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="loanPurpose" className="text-fintech-text-muted mb-2 block">Loan Purpose</Label>
                <Select value={loanPurpose} onValueChange={setLoanPurpose}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                    <SelectValue placeholder="Select loan purpose" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="home_improvement">Home Improvement</SelectItem>
                    <SelectItem value="debt_consolidation">Debt Consolidation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className="text-fintech-text-muted mb-2 block">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
              >
                Submit Application <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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