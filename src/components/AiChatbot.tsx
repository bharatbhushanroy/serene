"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Bot, X, Send, User } from 'lucide-react'; // Changed Sparkles to User
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [lastBotTopic, setLastBotTopic] = useState<string | null>(null); // To store context

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm Kiki, your personal assistant. I'm here to help you navigate our loan options and answer your financial questions. How can I assist you today?",
          sender: 'bot',
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector('div > div');
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight;
      }
    }
  }, [messages]);

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    // Reset topic if a new, unrelated query comes in
    const resetTopicKeywords = ['new question', 'different topic', 'start over'];
    if (resetTopicKeywords.some(keyword => lowerInput.includes(keyword))) {
      setLastBotTopic(null);
      return "Okay, let's start fresh. What's on your mind now?";
    }

    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      setLastBotTopic(null);
      return "Hello there! How can I assist you today?";
    }
    if (lowerInput.includes('how are you')) {
      setLastBotTopic(null);
      return "I'm just a bot, but I'm ready to help you with your financial queries!";
    }

    // Loan Types
    if (lowerInput.includes('loan') && (lowerInput.includes('type') || lowerInput.includes('kind') || lowerInput.includes('options'))) {
      setLastBotTopic('loan_types');
      return "Qicky offers a variety of loans including Personal Loans, Home Loans, Business Loans, Education Loans, and Vehicle Loans. Which type are you interested in?";
    }
    if (lowerInput.includes('personal loan') || (lastBotTopic === 'loan_types' && (lowerInput.includes('personal') || lowerInput.includes('this one')))) {
      setLastBotTopic('personal_loan');
      return "Our Personal Loans offer quick access to funds up to ₹5,00,000 with minimal paperwork and no collateral. Funds are typically disbursed within minutes! What amount are you looking for?";
    }
    if (lowerInput.includes('home loan') || (lastBotTopic === 'loan_types' && lowerInput.includes('home'))) {
      setLastBotTopic('home_loan');
      return "Qicky Home Loans come with competitive interest rates and longer repayment tenures, helping you achieve your dream home. They are secured loans, meaning your property acts as collateral. What's your estimated loan requirement?";
    }
    if (lowerInput.includes('business loan') || (lastBotTopic === 'loan_types' && lowerInput.includes('business'))) {
      setLastBotTopic('business_loan');
      return "Our Business Loans are designed to fuel your venture's growth, offering flexible terms for working capital or expansion. Eligibility depends on your business's financial health and turnover. Would you like to know more about the application process?";
    }
    if (lowerInput.includes('education loan') || (lastBotTopic === 'loan_types' && lowerInput.includes('education'))) {
      setLastBotTopic('education_loan');
      return "Education Loans from Qicky cover tuition fees, living expenses, and study materials. They often have longer repayment periods that start after your course completion. What kind of course are you planning to pursue?";
    }
    if (lowerInput.includes('vehicle loan') || (lastBotTopic === 'loan_types' && (lowerInput.includes('vehicle') || lowerInput.includes('car') || lowerInput.includes('bike')))) {
      setLastBotTopic('vehicle_loan');
      return "Qicky offers Vehicle Loans for both new and used cars/bikes with attractive interest rates. The vehicle itself usually serves as collateral. Are you looking for a new or used vehicle loan?";
    }

    // Interest Rates
    if (lowerInput.includes('interest') || lowerInput.includes('rate')) {
      setLastBotTopic('interest_rate');
      return "Our interest rates are competitive and depend on several factors like the loan type, your credit score, and the loan tenure. You can get a personalized quote by using our 'Loan Calculator' or starting an application, which won't affect your credit score.";
    }

    // How to Apply
    if ((lowerInput.includes('how') && lowerInput.includes('apply')) || lowerInput.includes('application process')) {
      setLastBotTopic('how_to_apply');
      return "Applying for a Qicky loan is 100% digital and very simple! Just click the 'Apply Now' button on our website, fill out the online form, and securely upload the required documents. The entire process takes just a few minutes.";
    }

    // Eligibility
    if (lowerInput.includes('eligibility') || lowerInput.includes('qualify') || lowerInput.includes('requirements')) {
      setLastBotTopic('eligibility');
      return "General eligibility criteria include being over 18, having a stable income, and a good credit history. Specific requirements may vary by loan type. You can use our 'Check Eligibility' tool on the website for an instant assessment.";
    }

    // Documents
    if (lowerInput.includes('documents') || lowerInput.includes('paperwork') || lowerInput.includes('what do i need')) {
      setLastBotTopic('documents');
      return "Typically, you'll need identity proof (PAN, Aadhaar), address proof, and income proof (bank statements, salary slips). For secured loans like home or vehicle loans, additional property/vehicle documents will be required. The exact list will be provided during application.";
    }

    // Repayment
    if (lowerInput.includes('repay') || lowerInput.includes('emi') || lowerInput.includes('payment') || lowerInput.includes('tenure')) {
      setLastBotTopic('repayment');
      return "We offer flexible repayment options, including the ability to repay your loan early without any prepayment penalties. You can choose a tenure that suits you, typically ranging from 3 to 60 months for personal loans. Our 'Loan Calculator' can help you estimate your EMIs.";
    }

    // Fees
    if (lowerInput.includes('fees') || lowerInput.includes('charges') || lowerInput.includes('hidden')) {
      setLastBotTopic('fees');
      return "Qicky is committed to transparency. All fees and charges, including processing fees, are clearly communicated upfront, with no hidden surprises. You'll see a full breakdown before you commit to any loan.";
    }

    // Loan Amount Limits
    if (lowerInput.includes('how much') && lowerInput.includes('loan')) {
      setLastBotTopic('loan_amount_limits');
      return "For Personal Loans, you can get up to ₹5,00,000. Home and Business Loans can be significantly higher, depending on your eligibility and collateral. What type of loan are you considering?";
    }

    // Prepayment
    if (lowerInput.includes('prepay') || lowerInput.includes('early repayment')) {
      setLastBotTopic('prepayment');
      return "Yes, you can repay your loan early with Qicky! We do not charge any prepayment penalties, giving you the flexibility to close your loan whenever you're ready.";
    }

    // Security/Collateral
    if (lowerInput.includes('collateral') || lowerInput.includes('security')) {
      setLastBotTopic('collateral');
      return "Personal loans are generally unsecured (no collateral needed). However, Home Loans and Vehicle Loans are secured, meaning the property or vehicle acts as collateral. This often allows for larger loan amounts and lower interest rates.";
    }

    // Support/Help
    if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('contact')) {
      setLastBotTopic('support');
      return "I can help with general questions. For specific account inquiries or personalized assistance, please visit our 'Contact Us' page to get in touch with our support team directly. You can also check our FAQs for common questions.";
    }

    // General positive/negative
    if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
      setLastBotTopic(null);
      return "You're most welcome! Is there anything else I can help you with today?";
    }
    if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
      setLastBotTopic(null);
      return "Goodbye! Have a great day. Feel free to chat again if you have more questions.";
    }

    // Fallback response
    setLastBotTopic(null); // Reset context for unrecognized queries
    return "I'm still learning, but I can help with common queries about our loans. Could you please rephrase your question or ask about a specific loan type, eligibility, or application process? You might also find answers on our FAQs page.";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponseText = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1200);
  };

  const KikiAvatar = () => (
    <motion.div
      className="relative w-24 h-24"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="kikiBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--fintech-kiki-body-gradient-start))" />
            <stop offset="100%" stopColor="hsl(var(--fintech-kiki-body-gradient-end))" />
          </linearGradient>
        </defs>
        {/* Body */}
        <circle cx="50" cy="75" r="20" fill="url(#kikiBodyGradient)" />
        {/* Head */}
        <circle cx="50" cy="40" r="25" fill="hsl(var(--fintech-kiki-head-color))" /> {/* Skin tone */}
        {/* Hair */}
        <path d="M25 40 C20 10 80 10 75 40 L75 50 C70 70 30 70 25 50 Z" fill="#4A2C2A" /> {/* Dark brown hair */}
        {/* Eyes */}
        <circle cx="40" cy="35" r="3" fill="black" />
        <circle cx="60" cy="35" r="3" fill="black" />
        {/* Mouth */}
        <path d="M45 50 Q50 55 55 50" stroke="black" strokeWidth="1" fill="none" />
        {/* Arm 1 */}
        <rect x="25" y="60" width="10" height="30" rx="5" fill="url(#kikiBodyGradient)" transform="rotate(-15 25 60)" />
        {/* Arm 2 (waving) */}
        <motion.rect
          x="65"
          y="55"
          width="10"
          height="30"
          rx="5"
          fill="url(#kikiBodyGradient)"
          transform="rotate(15 65 55)"
          animate={{ rotate: [15, 25, 15, 5, 15] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );

  return (
    <>
      {/* Kiki Avatar */}
      <motion.div
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <KikiAvatar />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 w-full max-w-sm h-[60vh] bg-fintech-simulator-card-bg border border-fintech-border-light rounded-2xl shadow-2xl shadow-fintech-blue-accent/30 flex flex-col z-50"
          >
            <header className="flex items-center justify-between p-4 border-b border-fintech-border-light">
              <div className="flex items-center space-x-3">
                <User className="h-7 w-7 text-fintech-blue-accent" />
                <div>
                  <h3 className="font-bold text-white text-lg">Kiki, Your Personal Assistant</h3>
                  <p className="text-xs text-fintech-green-success flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-green-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-green-success"></span>
                    </span>
                    Online
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-fintech-text-muted hover:text-white">
                <X className="h-5 w-5" />
              </Button>
            </header>
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex items-end gap-2",
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.sender === 'bot' && <User className="h-6 w-6 text-fintech-blue-accent flex-shrink-0" />}
                    <div
                      className={cn(
                        "max-w-xs rounded-2xl px-4 py-2 text-sm relative",
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white rounded-br-none'
                          : 'bg-fintech-dark-bg-lighter border border-fintech-border-light text-white rounded-bl-none'
                      )}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
            <footer className="p-4 border-t border-fintech-border-light">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Ask a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="bg-fintech-dark-bg-lighter border-fintech-border-light text-white focus:border-fintech-blue-accent"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white flex-shrink-0 hover:opacity-90 transition-opacity"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatbot;