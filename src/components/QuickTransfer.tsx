import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Plus } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

interface Recipient {
  id: string;
  name: string;
  avatar: string;
}

const recipients: Recipient[] = [
  { id: '1', name: 'Alice', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop' },
  { id: '2', name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-e695c6edd65d?q=80&w=1974&auto=format&fit=crop' },
  { id: '3', name: 'Charlie', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cfdce506?q=80&w=2080&auto=format&fit=crop' },
  { id: '4', name: 'Diana', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
];

const QuickTransfer = () => {
  const [amount, setAmount] = useState<string>('');
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(null);

  const handleTransfer = () => {
    if (!selectedRecipient) {
      showError("Please select a recipient.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      showError("Please enter a valid amount.");
      return;
    }

    showSuccess(`Successfully transferred ₹${parseFloat(amount).toFixed(2)} to ${selectedRecipient.name}!`);
    setAmount('');
    setSelectedRecipient(null);
  };

  return (
    <Card className="bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary rounded-xl shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-fintech-dashboard-text-primary">Quick Transfer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-fintech-dashboard-text-secondary mb-3">Send to:</p>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {recipients.map((recipient) => (
              <div
                key={recipient.id}
                className={`flex flex-col items-center cursor-pointer p-2 rounded-lg transition-colors ${
                  selectedRecipient?.id === recipient.id ? 'bg-fintech-dashboard-accent-blue/20 border border-fintech-dashboard-accent-blue' : 'hover:bg-fintech-dashboard-border'
                }`}
                onClick={() => setSelectedRecipient(recipient)}
              >
                <Avatar className="h-12 w-12 border-2 border-transparent">
                  <AvatarImage src={recipient.avatar} alt={recipient.name} />
                  <AvatarFallback className="bg-fintech-dashboard-accent-blue text-white">{recipient.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-xs text-fintech-dashboard-text-secondary mt-1">{recipient.name}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center p-2">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-dashed border-fintech-dashboard-border text-fintech-dashboard-text-secondary hover:bg-fintech-dashboard-border">
                <Plus className="h-5 w-5" />
              </Button>
              <p className="text-xs text-fintech-dashboard-text-secondary mt-1">Add New</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-fintech-dashboard-text-secondary mb-2">Amount</p>
          <Input
            type="number"
            placeholder="₹ 0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full py-2 rounded-lg bg-fintech-dashboard-input-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary placeholder:text-fintech-dashboard-text-secondary focus:ring-2 focus:ring-fintech-dashboard-accent-blue focus:border-transparent"
          />
        </div>

        <Button
          onClick={handleTransfer}
          className="w-full bg-fintech-dashboard-accent-blue text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Money
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickTransfer;