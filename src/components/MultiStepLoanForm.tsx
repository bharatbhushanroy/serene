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
import { User, Home, Briefcase, CreditCard, CalendarIcon, HelpCircle, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion'; // Import motion
import SuccessScreen from '@/components/SuccessScreen';
import OffersPage from './OffersPage';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const MultiStepLoanForm = () => {
  const [currentStep, setCurrentStep] = useState('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [otpVerificationData, setOtpVerificationData] = useState({ hashedOtp: '', expiresAt: 0 });

  // Personal Information State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [panNumber, setPanNumber] = useState('');

  // Address Information State
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  // Employment Information State
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [monthlySalary, setMonthlySalary] = useState<number | string>('');
  const [yearsOfExperience, setYearsOfExperience] = useState<number | string>('');

  // Loan Information State
  const [desiredLoanAmount, setDesiredLoanAmount] = useState<number | string>('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [repaymentTenure, setRepaymentTenure] = useState('');

  const [apiResponse, setApiResponse] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);


  // const handleSendOtp = async () => {
  //   if (!phoneNumber || phoneNumber.length < 10) {
  //     showError("Please enter a valid 10-digit phone number.");
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   try {
  //     const response = await fetch('https://apply.nucleus.qicky.in/api/submit/send-otp', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ mobileNumber: phoneNumber }),
  //     });
  //     const result = await response.json();
  //     if (response.ok) {
  //       showSuccess("OTP sent successfully!");
  //       setIsOtpSent(true);
  //     } else {
  //       showError(result.message || "Failed to send OTP");
  //     }
  //   } catch (error) {
  //     showError("Server connection failed");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleNextStep = () => {
    if (currentStep === 'personal') {
      if (!fullName || !email || !phoneNumber || !dateOfBirth || !panNumber) {
        showError("Please fill in all personal information fields.");
        return;
      }
      if (!isOtpSent) {
        handleSendOtp();
        return;
      }
      if (!otp) {
        showError("Please enter the OTP sent to your mobile.");
        return;
      }
      setCurrentStep('address');
    } else if (currentStep === 'address') {
      if (!addressLine1 || !city || !state || !zipCode) {
        showError("Please fill in all address information fields.");
        return;
      }
      setCurrentStep('employment');
    } else if (currentStep === 'employment') {
      if (!employmentStatus || !companyName || !monthlySalary || !yearsOfExperience) {
        showError("Please fill in all employment details.");
        return;
      }
      setCurrentStep('loan');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 'address') {
      setCurrentStep('personal');
    } else if (currentStep === 'employment') {
      setCurrentStep('address');
    } else if (currentStep === 'loan') {
      setCurrentStep('employment');
    }
  };

  // const handleSubmitApplication = () => {
  //   if (!desiredLoanAmount || !loanPurpose || !repaymentTenure) {
  //     showError("Please fill in all loan details.");
  //     return;
  //   }
  //   // In a real application, you would send all collected data to a backend.
  //   console.log({
  //     fullName, email, phoneNumber, dateOfBirth, panNumber,
  //     addressLine1, addressLine2, city, state, zipCode,
  //     employmentStatus, companyName, monthlySalary, yearsOfExperience,
  //     desiredLoanAmount, loanPurpose, repaymentTenure,
  //   });
  //   showSuccess("Your loan application has been submitted successfully!");
  //   // Optionally reset form or redirect
  // };

  const cardAnimationVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -5, 0, 5, 0],
      rotate: [0, 0.5, 0, -0.5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  const handleSubmitApplication = async () => {
    if (!desiredLoanAmount || !loanPurpose || !repaymentTenure) {
      showError("Please fill in all loan details.");
      return;
    }

    setIsSubmitting(true);
    const payload = {
      fullName,
      email,
      phoneNumber,
      dateOfBirth: dateOfBirth ? format(dateOfBirth, 'yyyy-MM-dd') : null,
      panNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      employmentStatus,
      companyName,
      monthlySalary,
      yearsOfExperience,
      desiredLoanAmount,
      loanPurpose,
      repaymentTenure
    };

    try {
      // Apne backend ka sahi URL yahan dalein
      const response = await fetch('https://apply.nucleus.qicky.in/api/submit/qicky-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        showSuccess("Application submitted! Lead ID: " + result.leadId);
        setIsSuccess(true)
        setApiResponse(result)
        setIsSubmitting(false)
        console.log("Lender Responses:", result.data);
        // Yahan aap user ko success page par redirect kar sakte hain
      } else {
        showError(result.error || "Something went wrong");
        setIsSubmitting(false)
      }


    } catch (error) {
      console.error("Submission Error:", error);
      showError("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendOtp = async () => {
    if (!fullName || !email || !phoneNumber || !dateOfBirth || !panNumber) {
      showError("Please fill in all personal information fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://apply.nucleus.qicky.in/api/submit/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: phoneNumber }),
      });

      const result = await response.json(); // Response parse karein

      if (result.success) {
        // Backend se aaya hashedOtp aur expiresAt state mein save karein
        setOtpVerificationData({
          hashedOtp: result.data.hashedOtp,
          expiresAt: result.data.expiresAt
        });
        showSuccess("OTP sent successfully!");
        setIsOtpModalOpen(true);
      } else {
        showError(result.message || "Failed to send OTP.");
      }
    } catch (error) {
      showError("Server connection failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      showError("Please enter 4-digit OTP");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const response = await fetch('https://admin.nucleus.qicky.in/api/submit/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Credentials ki ab zarurat nahi hai (State-less approach)
        body: JSON.stringify({
          mobileNumber: phoneNumber,
          otp: otp,
          hashedOtp: otpVerificationData.hashedOtp, // State se bheja
          expiresAt: otpVerificationData.expiresAt  // State se bheja
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showSuccess("Verification Successful!");
        setIsOtpModalOpen(false);
        setCurrentStep('address');
      } else {
        showError(result.message || "Invalid OTP, please try again.");
      }
    } catch (error) {
      showError("Verification failed. Check your connection.");
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  if (showOffers) return <OffersPage apiData={apiResponse} />;

  return (
    <>
      {isSuccess && (
        <SuccessScreen
          onDashboardClick={() => setShowOffers(true)}
          refId="8829-XP"
        />
      )}

      <Dialog open={isOtpModalOpen} onOpenChange={setIsOtpModalOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
          <DialogHeader className="flex flex-col items-center">
            <div className="h-12 w-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-blue-500 h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl font-bold">Verify OTP</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">
              We've sent a 4-digit code to <span className="text-white font-medium">+91 {phoneNumber}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              maxLength={4}
              placeholder="0 0 0 0"
              className="bg-slate-950 border-slate-700 text-white text-center text-3xl h-16 tracking-widest focus:border-blue-500"
            />
          </div>
          <DialogFooter className="flex-col sm:flex-col gap-3">
            <Button onClick={handleVerifyOtp} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
              Verify & Continue
            </Button>
            <Button variant="ghost" onClick={handleSendOtp} className="text-slate-400 hover:text-white">
              Resend Code
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <motion.div
        className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl shadow-fintech-blue-accent/10 max-w-4xl w-full"
        variants={cardAnimationVariants}
        initial="hidden"
        animate={["visible", "float"]} // Apply both initial and floating animations
      >
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

            <TabsContent value="address">
              <div className="flex items-center text-white text-xl font-semibold mb-6">
                <Home className="h-6 w-6 mr-2 text-fintech-blue-accent" /> Address Information
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="addressLine1" className="text-fintech-text-muted mb-2 flex items-center">
                    Address Line 1 <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Street address, P.O. box, company name, c/o" />
                  </Label>
                  <Input
                    id="addressLine1"
                    type="text"
                    placeholder="Enter address line 1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="addressLine2" className="text-fintech-text-muted mb-2 flex items-center">
                    Address Line 2 <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Apartment, suite, unit, building, floor, etc." />
                  </Label>
                  <Input
                    id="addressLine2"
                    type="text"
                    placeholder="Enter address line 2 (optional)"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-fintech-text-muted mb-2 flex items-center">
                    City <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your city" />
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-fintech-text-muted mb-2 flex items-center">
                    State <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your state" />
                  </Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="zipCode" className="text-fintech-text-muted mb-2 flex items-center">
                    Zip Code <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Enter your postal/zip code" />
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="Enter zip code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div className="md:col-span-2 flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePreviousStep}
                    className="bg-gray-800 border-gray-700 text-fintech-text-muted hover:bg-gray-700 group"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
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

            <TabsContent value="employment">
              <div className="flex items-center text-white text-xl font-semibold mb-6">
                <Briefcase className="h-6 w-6 mr-2 text-fintech-blue-accent" /> Employment Details
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="employmentStatus" className="text-fintech-text-muted mb-2 flex items-center">
                    Employment Status <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Your current employment status" />
                  </Label>
                  <Select value={employmentStatus} onValueChange={setEmploymentStatus}>
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                      <SelectValue placeholder="Select employment status" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self-employed">Self-Employed</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="companyName" className="text-fintech-text-muted mb-2 flex items-center">
                    Company Name <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Your employer's name or business name" />
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
                <div>
                  <Label htmlFor="monthlySalary" className="text-fintech-text-muted mb-2 flex items-center">
                    Monthly Salary (₹) <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Your gross monthly income" />
                  </Label>
                  <Input
                    id="monthlySalary"
                    type="number"
                    placeholder="Enter monthly salary"
                    value={monthlySalary}
                    onChange={(e) => setMonthlySalary(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="yearsOfExperience" className="text-fintech-text-muted mb-2 flex items-center">
                    Years of Experience <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Total years in current employment" />
                  </Label>
                  <Input
                    id="yearsOfExperience"
                    type="number"
                    placeholder="Enter years of experience"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div className="md:col-span-2 flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePreviousStep}
                    className="bg-gray-800 border-gray-700 text-fintech-text-muted hover:bg-gray-700 group"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
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

            <TabsContent value="loan">
              <div className="flex items-center text-white text-xl font-semibold mb-6">
                <CreditCard className="h-6 w-6 mr-2 text-fintech-blue-accent" /> Loan Details
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="desiredLoanAmount" className="text-fintech-text-muted mb-2 flex items-center">
                    Desired Loan Amount (₹) <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="The amount you wish to borrow" />
                  </Label>
                  <Input
                    id="desiredLoanAmount"
                    type="number"
                    placeholder="e.g., 100000"
                    value={desiredLoanAmount}
                    onChange={(e) => setDesiredLoanAmount(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="loanPurpose" className="text-fintech-text-muted mb-2 flex items-center">
                    Purpose of Loan <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="Briefly explain why you need the loan" />
                  </Label>
                  <Textarea
                    id="loanPurpose"
                    placeholder="e.g., Home renovation, medical emergency, debt consolidation"
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="repaymentTenure" className="text-fintech-text-muted mb-2 flex items-center">
                    Repayment Tenure (Months) <HelpCircle className="h-4 w-4 ml-1 text-gray-500 cursor-help" title="How many months you need to repay the loan" />
                  </Label>
                  <Select value={repaymentTenure} onValueChange={setRepaymentTenure}>
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent">
                      <SelectValue placeholder="Select tenure" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">12 Months</SelectItem>
                      <SelectItem value="18">18 Months</SelectItem>
                      <SelectItem value="24">24 Months</SelectItem>
                      <SelectItem value="36">36 Months</SelectItem>
                      <SelectItem value="48">48 Months</SelectItem>
                      <SelectItem value="60">60 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePreviousStep}
                    className="bg-gray-800 border-gray-700 text-fintech-text-muted hover:bg-gray-700 group"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
                  <Button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmitApplication}
                    className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Submit Application <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </TabsContent>
            {/* OTP SECTION INSIDE THE TAB */}

          </Tabs>
        </CardContent>
      </motion.div>
    </>
  );
};

export default MultiStepLoanForm;