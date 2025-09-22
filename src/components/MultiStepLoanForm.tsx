"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { User, Home, Briefcase, CreditCard, CalendarIcon, HelpCircle, ArrowRight } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

const MultiStepLoanForm = () => {
  const [currentStep, setCurrentStep] = useState('personal');

  // Personal Information State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [panNumber, setPanNumber] = useState('');

  const handleNextStep = () => {
    if (currentStep === 'personal') {
      if (!fullName || !email || !phoneNumber || !dateOfBirth || !panNumber) {
        showError("Please fill in all personal information fields.");
        return;
      }
      // In a real app, you'd validate data and potentially save it
      setCurrentStep('address');
    }
    // Add logic for other steps here
  };

  return (
    <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-4xl w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-extrabold text-white mb-4">
          Loan Application
        </CardTitle>
        <p className="text-lg text-fintech-text-muted">Fill out the steps below to apply</p>
      </CardHeader>
      <CardContent>
        <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-gray-700 rounded-xl p-1 mb-8">
            <TabsTrigger
              value="personal"
              className={cn(
                "flex items-center justify-center space-x-2 py-2 rounded-lg transition-all",
                currentStep === 'personal' ? "bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white shadow-md" : "text-fintech-text-muted hover:bg-gray-700"
              )}
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger
              value="address"
              className={cn(
                "flex items-center justify-center space-x-2 py-2 rounded-lg transition-all",
                currentStep === 'address' ? "bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white shadow-md" : "text-fintech-text-muted hover:bg-gray-700"
              )}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Address</span>
            </TabsTrigger>
            <TabsTrigger
              value="employment"
              className={cn(
                "flex items-center justify-center space-x-2 py-2 rounded-lg transition-all",
                currentStep === 'employment' ? "bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white shadow-md" : "text-fintech-text-muted hover:bg-gray-700"
              )}
            >
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Employment</span>
            </TabsTrigger>
            <TabsTrigger
              value="loan"
              className={cn(
                "flex items-center justify-center space-x-2 py-2 rounded-lg transition-all",
                currentStep === 'loan' ? "bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white shadow-md" : "text-fintech-text-muted hover:bg-gray-700"
              )}
            >
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Loan</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <div className="flex items-center text-white text-xl font-semibold mb-6">
              <User className="h-6 w-6 mr-2 text-fintech-blue-accent" /> Personal Information
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-fintech-text-muted mb-2 flex items-center">
                  Full Name <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your full legal name" />
                </Label>
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
                <Label htmlFor="email" className="text-fintech-text-muted mb-2 flex items-center">
                  Email Address <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your active email address" />
                </Label>
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
                <Label htmlFor="phoneNumber" className="text-fintech-text-muted mb-2 flex items-center">
                  Phone Number <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your 10-digit mobile number" />
                </Label>
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
                <Label htmlFor="dateOfBirth" className="text-fintech-text-muted mb-2 flex items-center">
                  Date of Birth <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Your date of birth (DD/MM/YYYY)" />
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700",
                        !dateOfBirth && "text-fintech-text-muted"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Select your date of birth</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-fintech-simulator-card-bg border-fintech-border-light">
                    <Calendar
                      mode="single"
                      selected={dateOfBirth}
                      onSelect={setDateOfBirth}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="panNumber" className="text-fintech-text-muted mb-2 flex items-center">
                  PAN Number <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Your Permanent Account Number" />
                </Label>
                <Input
                  id="panNumber"
                  type="text"
                  placeholder="Enter your PAN number"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div className="md:col-span-2 flex justify-end mt-6">
                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                >
                  Next Step <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </TabsContent>
          {/* Placeholder for other tabs */}
          <TabsContent value="address">
            <div className="text-white text-center py-10">Address Information (Coming Soon)</div>
          </TabsContent>
          <TabsContent value="employment">
            <div className="text-white text-center py-10">Employment Details (Coming Soon)</div>
          </TabsContent>
          <TabsContent value="loan">
            <div className="text-white text-center py-10">Loan Details (Coming Soon)</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MultiStepLoanForm;