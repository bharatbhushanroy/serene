"use client";

import React, { useState, useCallback, useEffect } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress'; // Import Progress component
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { User, Home, Briefcase, DollarSign, CalendarIcon, Info, ArrowRight, CheckCircle } from 'lucide-react';

const ApplyLoanPage = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // State for Personal Information tab
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [panNumber, setPanNumber] = useState('');

  // State for Address Information tab
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  // State for Employment Details tab
  const [employmentStatus, setEmploymentStatus] = useState<'salaried' | 'self-employed' | 'student' | 'unemployed' | ''>('');
  const [companyName, setCompanyName] = useState('');
  const [annualIncome, setAnnualIncome] = useState<number>(500000); // Slider default
  const [yearsOfExperience, setYearsOfExperience] = useState<number | string>('');

  // State for Loan Details tab
  const [desiredLoanAmount, setDesiredLoanAmount] = useState<number>(100000); // Slider default
  const [loanPurpose, setLoanPurpose] = useState<'education' | 'medical' | 'home_improvement' | 'debt_consolidation' | 'other' | ''>('');
  const [preferredTenure, setPreferredTenure] = useState<number | string>(''); // in months

  // State for completion percentage
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const calculateCompletionPercentage = useCallback(() => {
    let completedFields = 0;
    let totalFields = 0;

    // Personal Info
    totalFields += 5; // fullName, email, phoneNumber, dateOfBirth, panNumber
    if (fullName) completedFields++;
    if (email) completedFields++;
    if (phoneNumber) completedFields++;
    if (dateOfBirth) completedFields++;
    if (panNumber) completedFields++;

    // Address Info
    totalFields += 4; // addressLine1, city, state, zipCode (addressLine2 optional)
    if (addressLine1) completedFields++;
    if (city) completedFields++;
    if (state) completedFields++;
    if (zipCode) completedFields++;
    // addressLine2 is optional, so not counted in totalFields for completion

    // Employment Info
    totalFields += 3; // employmentStatus, annualIncome, yearsOfExperience
    if (employmentStatus) completedFields++;
    if (annualIncome > 0) completedFields++; // Assuming 0 is not a valid income
    if (yearsOfExperience !== '' && Number(yearsOfExperience) >= 0) completedFields++;
    if ((employmentStatus === 'salaried' || employmentStatus === 'self-employed') && companyName) {
      // companyName is conditional, only count if relevant status is selected and filled
      completedFields++;
    }
    if (employmentStatus === 'salaried' || employmentStatus === 'self-employed') {
      totalFields++; // Add companyName to total if relevant employment status
    }


    // Loan Info
    totalFields += 3; // desiredLoanAmount, loanPurpose, preferredTenure
    if (desiredLoanAmount > 0) completedFields++;
    if (loanPurpose) completedFields++;
    if (preferredTenure) completedFields++;

    const percentage = (completedFields / totalFields) * 100;
    return isNaN(percentage) ? 0 : percentage; // Handle division by zero if no fields
  }, [fullName, email, phoneNumber, dateOfBirth, panNumber,
      addressLine1, addressLine2, city, state, zipCode,
      employmentStatus, companyName, annualIncome, yearsOfExperience,
      desiredLoanAmount, loanPurpose, preferredTenure]);

  useEffect(() => {
    setCompletionPercentage(calculateCompletionPercentage());
  }, [calculateCompletionPercentage]);

  const handleNextStep = () => {
    let isValid = true;
    let nextTab = activeTab;

    if (activeTab === 'personal') {
      if (!fullName || !email || !phoneNumber || !dateOfBirth || !panNumber) {
        showError("Please fill in all required personal information fields.");
        isValid = false;
      } else {
        nextTab = 'address';
      }
    } else if (activeTab === 'address') {
      if (!addressLine1 || !city || !state || !zipCode) {
        showError("Please fill in all required address information fields.");
        isValid = false;
      } else {
        nextTab = 'employment';
      }
    } else if (activeTab === 'employment') {
      if (!employmentStatus || annualIncome <= 0 || yearsOfExperience === '') {
        showError("Please fill in all required employment details.");
        isValid = false;
      } else if ((employmentStatus === 'salaried' || employmentStatus === 'self-employed') && !companyName) {
        showError("Please enter your company name.");
        isValid = false;
      } else {
        nextTab = 'loan';
      }
    }

    if (isValid) {
      setActiveTab(nextTab);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Final validation for the loan tab
    if (!desiredLoanAmount || !loanPurpose || !preferredTenure) {
      showError("Please fill in all required loan details.");
      return;
    }

    // In a real app, you'd send all collected data to a backend
    console.log("Full Application Data:", {
      fullName, email, phoneNumber, dateOfBirth, panNumber,
      addressLine1, addressLine2, city, state, zipCode,
      employmentStatus, companyName, annualIncome, yearsOfExperience,
      desiredLoanAmount, loanPurpose, preferredTenure,
    });

    showSuccess("Your loan application has been submitted successfully!");
    // Optionally redirect to a confirmation page or dashboard
    // navigate('/dashboard');
  };

  const formatCurrency = (value: number) => `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;


  return (
    <div className="min-h-screen bg-fintech-dark-bg text-white hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4">
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Loan</span> Now
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-10 max-w-3xl mx-auto">
          Complete the form below to get started with your loan application. Our team will review your application and get back to you within 24 hours.
        </p>

        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-4xl w-full">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Application Progress</h3>
              <span className="text-fintech-blue-accent font-bold">{Math.round(completionPercentage)}% Complete</span>
            </div>
            <Progress value={completionPercentage} className="h-3 bg-gray-700" indicatorClassName="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start" />
          </div>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="addressLine1" className="text-fintech-text-muted mb-2 flex items-center">
                      Address Line 1
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your house number, building name, and street.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="addressLine1"
                      type="text"
                      placeholder="House No., Building, Street"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="addressLine2" className="text-fintech-text-muted mb-2 flex items-center">
                      Address Line 2 (Optional)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Area, Landmark, etc.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="addressLine2"
                      type="text"
                      placeholder="Area, Landmark"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-fintech-text-muted mb-2 flex items-center">
                      City
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your current city of residence.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="e.g., Mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-fintech-text-muted mb-2 flex items-center">
                      State
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your current state of residence.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="state"
                      type="text"
                      placeholder="e.g., Maharashtra"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-fintech-text-muted mb-2 flex items-center">
                      Zip Code
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your area's postal code.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="zipCode"
                      type="text"
                      placeholder="e.g., 400001"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    onClick={() => setActiveTab('personal')}
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextStep}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="employmentStatus" className="text-fintech-text-muted mb-2 flex items-center">
                      Employment Status
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Your current employment situation.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Select value={employmentStatus} onValueChange={(value: typeof employmentStatus) => setEmploymentStatus(value)}>
                      <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="salaried">Salaried</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {(employmentStatus === 'salaried' || employmentStatus === 'self-employed') && (
                    <div>
                      <Label htmlFor="companyName" className="text-fintech-text-muted mb-2 flex items-center">
                        Company Name
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-700 text-white border-gray-600">
                              <p>Your employer's name or business name.</p>
                            </TooltipContent>
                          </Tooltip>
                        </Tooltip>
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Enter company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                      />
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <Label htmlFor="annualIncome" className="text-fintech-text-muted mb-2 flex items-center justify-between">
                      <span className="flex items-center">Annual Income <TooltipProvider><Tooltip><TooltipTrigger asChild><Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" /></TooltipTrigger><TooltipContent className="bg-gray-700 text-white border-gray-600"><p>Your total income before taxes per year.</p></TooltipContent></Tooltip></TooltipProvider></span>
                      <span className="text-lg font-semibold text-white">{formatCurrency(annualIncome)}</span>
                    </Label>
                    <Slider
                      id="annualIncome"
                      min={50000}
                      max={2000000}
                      step={50000}
                      value={[annualIncome]}
                      onValueChange={(val) => setAnnualIncome(val[0])}
                      className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-blue-accent [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                    />
                    <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                      <span>₹50,000</span>
                      <span>₹20,00,000</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="yearsOfExperience" className="text-fintech-text-muted mb-2 flex items-center">
                      Years of Experience
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>Number of years in your current profession.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      id="yearsOfExperience"
                      type="number"
                      placeholder="e.g., 5"
                      value={yearsOfExperience}
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    onClick={() => setActiveTab('address')}
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextStep}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="desiredLoanAmount" className="text-fintech-text-muted mb-2 flex items-center justify-between">
                      <span className="flex items-center">Desired Loan Amount <TooltipProvider><Tooltip><TooltipTrigger asChild><Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" /></TooltipTrigger><TooltipContent className="bg-gray-700 text-white border-gray-600"><p>The total amount you wish to borrow.</p></TooltipContent></Tooltip></TooltipProvider></span>
                      <span className="text-lg font-semibold text-white">{formatCurrency(desiredLoanAmount)}</span>
                    </Label>
                    <Slider
                      id="desiredLoanAmount"
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={[desiredLoanAmount]}
                      onValueChange={(val) => setDesiredLoanAmount(val[0])}
                      className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700 [&>span:first-child>span]:bg-fintech-blue-accent [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-fintech-blue-accent [&_[role=slider]]:border-2 [&_[role=slider]]:border-fintech-blue-accent"
                    />
                    <div className="flex justify-between text-sm text-fintech-text-muted mt-2">
                      <span>₹10,000</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="loanPurpose" className="text-fintech-text-muted mb-2 flex items-center">
                      Loan Purpose
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>What you intend to use the loan for.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Select value={loanPurpose} onValueChange={(value: typeof loanPurpose) => setLoanPurpose(value)}>
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
                    <Label htmlFor="preferredTenure" className="text-fintech-text-muted mb-2 flex items-center">
                      Preferred Tenure (Months)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-fintech-text-muted cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700 text-white border-gray-600">
                            <p>The number of months you prefer to repay the loan.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Select value={preferredTenure.toString()} onValueChange={(value) => setPreferredTenure(Number(value))}>
                      <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                        <SelectValue placeholder="Select tenure" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="12">12 Months</SelectItem>
                        <SelectItem value="24">24 Months</SelectItem>
                        <SelectItem value="36">36 Months</SelectItem>
                        <SelectItem value="48">48 Months</SelectItem>
                        <SelectItem value="60">60 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
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