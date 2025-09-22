"use client";

import React from 'react';
import { User, Gift, Zap, DollarSign, Info, ArrowRight, Umbrella, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const InsurancePhoneMockup = () => {
  return (
    <div className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">UPI</span>
          <span className="px-2 py-1 rounded-full bg-fintech-blue-accent text-white">Insure</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Borrow</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto text-white">
          <h3 className="text-2xl font-bold mb-2">Insurance</h3>
          <p className="text-sm text-gray-400 mb-4">Starting at ₹129</p>
          <Button className="bg-fintech-blue-accent text-white px-6 py-2 rounded-full flex items-center text-base font-medium hover:bg-blue-600">
            See plans <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Why Qicky Insurance? Card */}
          <Card className="bg-white rounded-xl p-4 text-black mt-6 mb-6">
            <p className="font-semibold text-lg mb-3">Why Qicky Insurance?</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <DollarSign className="h-4 w-4 text-fintech-blue-accent mr-2" /> Value for money plans
              </li>
              <li className="flex items-center">
                <Zap className="h-4 w-4 text-fintech-blue-accent mr-2" /> Book in <span className="font-bold text-fintech-blue-accent ml-1">27 secs</span>
              </li>
              <li className="flex items-center">
                <Info className="h-4 w-4 text-fintech-blue-accent mr-2" /> Plans only available on Qicky
              </li>
            </ul>
          </Card>

          <p className="text-lg font-bold mb-4">Insurance starting at ₹129</p>

          {/* Insurance Categories */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 rounded-xl p-4 text-white flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold mb-1">Health Insurance</p>
                <p className="text-sm font-semibold mb-2">Category</p>
                <p className="text-xs text-gray-400 line-through">Starting at ₹159</p>
                <p className="text-sm text-fintech-green-success font-bold">₹129</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button variant="ghost" className="text-fintech-blue-accent text-xs p-0 h-auto hover:bg-transparent">
                  Explore <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
            <Card className="bg-gray-800 rounded-xl p-4 text-white flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold mb-1">Vehicle Care</p>
                <p className="text-sm font-semibold mb-2">Category</p>
                <p className="text-xs text-gray-400 line-through">Starting at ₹1099</p>
                <p className="text-sm text-fintech-green-success font-bold">₹799</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button variant="ghost" className="text-fintech-blue-accent text-xs p-0 h-auto hover:bg-transparent">
                  Explore <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePhoneMockup;