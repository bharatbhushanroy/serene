"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea'; // Keep if needed for other tabs
import { showSuccess, showError } from '@/utils/toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Keep if needed for other tabs

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { User, Home, Briefcase, DollarSign, CalendarIcon, Info, ArrowRight } from 'lucide-react';

const ApplyLoanPage = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // State for Personal Information tab
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [panNumber, setPanNumber] = useState('');

  const handleNextStep = () => {
    // Basic validation for the current tab
    if (activeTab === 'personal') {
      if (!fullName || !email || !phoneNumber || !dateOfBirth || !panNumber) {
        showError("Please fill in all personal information fields.");
        return;
      }
      // In a real app, you'd send this data to a backend or context
      console.log("Personal Info:", { fullName, email, phoneNumber, dateOfBirth, panNumber });
      setActiveTab('address'); // Move to the next tab
    }
    // Add similar logic for other tabs
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This function would be called on the final 'Loan' tab submission
    // For now, it's a placeholder.
    showSuccess("Your loan application has been submitted successfully!");
    // Reset form or redirect
  };

  return (
    <div className="min-h-screen bg-fintech-dark-bg text-white hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4">
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Loan</span> Now
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Complete the form below to get started with your loan application. Our team will review your application and get back to you within 24 hours.
        </p>

        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-4xl w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto bg-gray-800 p-1 rounded-xl mb-8">
              <TabsTrigger
                value="personal"
                className={cn(
                  "flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-fintech-text-muted data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-fintech-blue-accent data-[state=active]:to-fintech-gradient-purple-start transition-all duration-300",
                  activeTab === 'personal' ? 'shadow-md' : ''
                )}
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
              <TabsTrigger
                value="address"
                className={cn(
                  "flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-fintech-text-muted data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-fintech-blue-accent data-[state=active]:to-fintech-gradient-purple-start transition-all duration-300",
                  activeTab === 'address' ? 'shadow-md' : ''
                )}
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">Address</span>
              </TabsTrigger>
              <TabsTrigger
                value="employment"
                className={cn(
                  "flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-fintech-text-muted data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-fintech-blue-accent data-[state=active]:to-fintech-gradient-purple-start transition-all duration-300",
                  activeTab === 'employment' ? 'shadow-md' : ''
                )}
              >
                <Briefcase className="h-5 w-5" />
                <span className="hidden sm:inline">Employment</span>
              </TabsTrigger>
              <TabsTrigger
                value="loan"
                className={cn(
                  "flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-fintech-text-muted data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-fintech-blue-accent data-[state=active]:to-fintech-gradient-purple-start transition-all duration-300",
                  activeTab === 'loan' ? 'shadow-md' : ''
                )}
              >
                <DollarSign className="h-5 w-5" />
                <span className="hidden sm:inline">Loan</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <User className="h-6 w-6 mr-3 text-fintech-blue-accent" /> Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-fintech-text-muted mb-2 flex items-center">
                      Full Name
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Enter your full legal name as per your ID.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                      Email Address
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>We'll send important updates to this email.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                      Phone Number
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your primary contact number.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                      Date of Birth
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your date of birth (DD/MM/YYYY).</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700 text-white">
                        <Calendar
                          mode="single"
                          selected={dateOfBirth}
                          onSelect={setDateOfBirth}
                          initialFocus
                          className="text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="panNumber" className="text-fintech-text-muted mb-2 flex items-center">
                      PAN Number
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your Permanent Account Number (PAN) is required for verification.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="panNumber"
                      type="text"
                      placeholder="Enter your PAN number"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleNextStep}
                    className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Next Step <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="address">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Home className="h-6 w-6 mr-3 text-fintech-blue-accent" /> Address Information
                </h3>
                <p className="text-fintech-text-muted">
                  Please provide your current residential address details. (Placeholder content)
                </p>
                {/* Add address form fields here */}
                <div className="flex justify-between">
                  <Button
                    onClick={() => setActiveTab('personal')}
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setActiveTab('employment')}
                    className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Next Step <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="employment">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-fintech-blue-accent" /> Employment Details
                </h3>
                <p className="text-fintech-text-muted">
                  Tell us about your employment status and income. (Placeholder content)
                </p>
                {/* Add employment form fields here */}
                <div className="flex justify-between">
                  <Button
                    onClick={() => setActiveTab('address')}
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setActiveTab('loan')}
                    className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Next Step <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="loan">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <DollarSign className="h-6 w-6 mr-3 text-fintech-blue-accent" /> Loan Details
                </h3>
                <p className="text-fintech-text-muted">
                  Specify your desired loan amount and purpose. (Placeholder content)
                </p>
                {/* Add loan details form fields here */}
                <div className="flex justify-between">
                  <Button
                    onClick={() => setActiveTab('employment')}
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Submit Application <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ApplyLoanPage;