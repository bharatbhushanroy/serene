import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EmiCalculatorCard = () => {
  const [amount, setAmount] = useState(50000);
  const [tenure, setTenure] = useState(12); // in months

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const { emi } = useMemo(() => {
    const principal = amount;
    const annualRate = 14; // Assuming a fixed 14% annual interest rate
    const months = tenure;

    if (principal <= 0 || months <= 0) {
      return { emi: 0 };
    }

    const monthlyRate = annualRate / (12 * 100);
    const emiNumerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const emiDenominator = Math.pow(1 + monthlyRate, months) - 1;
    const calculatedEmi = emiNumerator / emiDenominator;

    return {
      emi: calculatedEmi,
    };
  }, [amount, tenure]);

  const processingFee = useMemo(() => amount * 0.02, [amount]); // Assuming 2% processing fee

  return (
    <Card className="w-full max-w-lg shadow-2xl rounded-2xl p-4 sm:p-8">
      <CardHeader className="p-0">
        <Tabs defaultValue="cash" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cash">Instant Cash</TabsTrigger>
            <TabsTrigger value="purchase" disabled>Online Purchase</TabsTrigger>
            <TabsTrigger value="credit" disabled>Line of Credit</TabsTrigger>
          </TabsList>
          <TabsContent value="cash">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 mb-4">
              Get Instant Cash up to ₹5,00,000
            </h2>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent className="p-0 mt-6 space-y-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">How much do you need?</label>
            <span className="px-4 py-1 bg-primary/10 text-primary font-bold rounded-full">{formatCurrency(amount)}</span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={(value) => setAmount(value[0])}
            min={1000}
            max={500000}
            step={1000}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>₹1,000</span>
            <span>₹5,00,000</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">For how long?</label>
            <span className="px-4 py-1 bg-primary/10 text-primary font-bold rounded-full">{tenure} Months</span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            min={3}
            max={24}
            step={1}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>3 Months</span>
            <span>24 Months</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center text-gray-600">
            <span>Monthly EMI</span>
            <span className="font-bold text-gray-800">{formatCurrency(emi)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Interest Rate</span>
            <span className="font-bold text-gray-800">14% p.a.</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Processing Fees</span>
            <span className="font-bold text-gray-800">{formatCurrency(processingFee)}</span>
          </div>
        </div>
        <Button className="w-full bg-primary text-lg py-6 rounded-full">Get it now</Button>
      </CardContent>
    </Card>
  );
};

export default EmiCalculatorCard;