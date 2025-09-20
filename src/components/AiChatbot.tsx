"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Bot, X, Send } from 'lucide-react';
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
          text: "Hello! I'm Qicky's AI assistant. How can I help you with your loan questions today?",
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

    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello there! How can I assist you today?";
    }
    if (lowerInput.includes('how are you')) {
      return "I'm just a bot, but I'm ready to help you with your financial queries!";
    }

    // Loan Types
    if (lowerInput.includes('loan') && (lowerInput.includes('type') || lowerInput.includes('kind'))) {
      setLastBotTopic('loan_types');
      return "We primarily offer instant personal loans for various needs like medical emergencies, education, or home improvement. We also have options for business and home loans. Which one are you interested in?";
    }
    if (lowerInput.includes('personal loan') || (lastBotTopic === 'loan_types' && (lowerInput.includes('personal') || lowerInput.includes('this one')))) {
      setLastBotTopic('personal_loan');
      return "Our personal loans are designed for quick access to funds up to ₹5,00,000 with minimal paperwork. They are disbursed within minutes!";
    }
    if (lowerInput.includes('business loan')) {
      setLastBotTopic('business_loan');
      return "For business loans, we offer flexible terms to help your venture grow. Eligibility depends on your business's financial health. Would you like to know more about the application process?";
    }
    if (lowerInput.includes('home loan')) {
      setLastBotTopic('home_loan');
      return "Our home loans come with competitive interest rates and extended tenures. We aim to make your dream home a reality. What specific details are you looking for?";
    }

    // Interest Rates
    if (lowerInput.includes('interest') || lowerInput.includes('rate')) {
      setLastBotTopic('interest_rate');
      return "Our interest rates are competitive and vary based on your profile and the loan type. You can get a personalized quote by starting an application, which won't affect your credit score.";
    }

    // How to Apply
    if ((lowerInput.includes('how') && lowerInput.includes('apply')) || lowerInput.includes('application process')) {
      setLastBotTopic('how_to_apply');
      return "Applying is easy! Just click the 'Apply Now' button on our website, fill out the simple digital form, and submit the required documents. The whole process is 100% digital and takes just a few minutes.";
    }

    // Eligibility
    if (lowerInput.includes('eligibility') || lowerInput.includes('qualify')) {
      setLastBotTopic('eligibility');
      return "Eligibility generally includes being over 18, having a stable income, and a good credit history. You can use our 'Check Eligibility' tool on the website for an instant assessment.";
    }

    // Documents
    if (lowerInput.includes('documents') || lowerInput.includes('paperwork')) {
      setLastBotTopic('documents');
      return "For personal loans, typically you'll need identity proof (PAN, Aadhaar), address proof, and income proof (bank statements, salary slips). The exact requirements will be detailed during the application.";
    }

    // Repayment
    if (lowerInput.includes('repay') || lowerInput.includes('emi') || lowerInput.includes('payment')) {
      setLastBotTopic('repayment');
      return "We offer flexible repayment options, including early repayment without penalties. You can use our 'Loan Calculator' to estimate your EMIs.";
    }

    // Fees
    if (lowerInput.includes('fees') || lowerInput.includes('charges') || lowerInput.includes('hidden')) {
      setLastBotTopic('fees');
      return "Qicky is committed to transparency. All fees and charges are clearly communicated upfront, with no hidden surprises. You'll see a full breakdown before you commit.";
    }

    // Support/Help
    if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('contact')) {
      setLastBotTopic('support');
      return "I can help with general questions. For specific account inquiries or personalized assistance, please visit our 'Contact Us' page to get in touch with our support team directly.";
    }

    // General positive/negative
    if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
      setLastBotTopic(null);
      return "You're welcome! Is there anything else I can help you with?";
    }
    if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
      setLastBotTopic(null);
      return "Goodbye! Have a great day. Feel free to chat again if you have more questions.";
    }

    // Fallback response
    setLastBotTopic(null); // Reset context for unrecognized queries
    return "That's a great question! I'm still learning, but I can help with common queries about our loans. For more detailed information, I recommend visiting our FAQs page or contacting our support team through the 'Contact Us' page.";
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

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 w-full max-w-sm h-[60vh] bg-fintech-card-light border border-fintech-border-light rounded-2xl shadow-2xl shadow-fintech-blue-accent/30 flex flex-col z-50"
          >
            <header className="flex items-center justify-between p-4 border-b border-fintech-border-light">
              <div className="flex items-center space-x-3">
                <Bot className="h-7 w-7 text-fintech-blue-accent" />
                <div>
                  <h3 className="font-bold text-fintech-text-dark text-lg">Qicky AI Assistant</h3>
                  <p className="text-xs text-fintech-green-success flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-green-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-green-success"></span>
                    </span>
                    Online
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-fintech-text-muted hover:text-fintech-text-dark">
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
                    {message.sender === 'bot' && <Bot className="h-6 w-6 text-fintech-blue-accent flex-shrink-0" />}
                    <div
                      className={cn(
                        "max-w-xs rounded-2xl px-4 py-2 text-sm",
                        message.sender === 'user'
                          ? 'bg-fintech-blue-accent text-white rounded-br-none'
                          : 'bg-fintech-background-offwhite border border-fintech-border-light text-fintech-text-dark rounded-bl-none'
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
                  className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="bg-gradient-button-primary text-white flex-shrink-0"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5, type: 'spring' }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-white shadow-2xl shadow-fintech-blue-accent/40"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? 'x' : 'msg'}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
};

export default AiChatbot;