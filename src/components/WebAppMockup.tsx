"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Banknote, Shield, TrendingUp, QrCode, CreditCard, PiggyBank } from 'lucide-react';

const WebAppMockup: React.FC = () => {
  const browserFrameVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="relative w-full max-w-4xl aspect-[16/9] bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
      variants={browserFrameVariants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Browser Top Bar */}
      <div className="flex items-center p-3 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex-1 mx-4 bg-gray-700 rounded-md h-6 flex items-center justify-center text-xs text-gray-400">
          qicky.app/dashboard
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100%-44px)] bg-[#1A1A1A] text-white">
        {/* Sidebar Navigation */}
        <div className="w-48 bg-gray-800 p-4 flex flex-col space-y-4 border-r border-gray-700">
          <Button variant="ghost" className="justify-start text-fintech-blue-accent hover:bg-gray-700">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <QrCode className="mr-2 h-4 w-4" /> UPI Payments
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <CreditCard className="mr-2 h-4 w-4" /> Cards
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <PiggyBank className="mr-2 h-4 w-4" /> Savings
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <Shield className="mr-2 h-4 w-4" /> Insurance
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <Banknote className="mr-2 h-4 w-4" /> Loans
          </Button>
          <Button variant="ghost" className="justify-start text-gray-400 hover:bg-gray-700">
            <TrendingUp className="mr-2 h-4 w-4" /> Investments
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold mb-6">Welcome to Qicky Dashboard!</h3>

          <Tabs defaultValue="upi" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 mb-6">
              <TabsTrigger value="upi">UPI</TabsTrigger>
              <TabsTrigger value="borrow-insure">Borrow & Insure</TabsTrigger>
              <TabsTrigger value="invest">Invest</TabsTrigger>
            </TabsList>
            <TabsContent value="upi">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-fintech-blue-accent">Instant UPI Payments</CardTitle>
                  <CardDescription className="text-gray-400">Send and receive money seamlessly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <QrCode className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Scan & Pay</p>
                        <p className="text-sm text-gray-500">Quick payments via QR</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      Open Scanner <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Banknote className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Send to Bank/UPI ID</p>
                        <p className="text-sm text-gray-500">Transfer to any account</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      New Transfer <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="borrow-insure">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-fintech-orange-accent">Borrow & Insure</CardTitle>
                  <CardDescription className="text-gray-400">Secure your future and get quick loans.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Personal Loans</p>
                        <p className="text-sm text-gray-500">Instant approval, flexible terms</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Health Insurance</p>
                        <p className="text-sm text-gray-500">Comprehensive coverage</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="invest">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-fintech-green-success">Smart Investments</CardTitle>
                  <CardDescription className="text-gray-400">Grow your wealth with expert guidance.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Mutual Funds</p>
                        <p className="text-sm text-gray-500">Diversified portfolio options</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      Explore Funds <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PiggyBank className="h-6 w-6 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Fixed Deposits</p>
                        <p className="text-sm text-gray-500">Guaranteed returns</p>
                      </div>
                    </div>
                    <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                      View Rates <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default WebAppMockup;