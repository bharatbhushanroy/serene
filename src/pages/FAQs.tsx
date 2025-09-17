import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What types of loans does Qicky offer?",
    answer: "Qicky primarily offers instant personal loans designed for various needs, from emergencies to personal projects. We aim for quick approvals and flexible repayment terms.",
  },
  {
    question: "How quickly can I get my loan approved?",
    answer: "Our streamlined digital process allows for instant approvals. Once approved, funds are typically disbursed to your bank account within hours.",
  },
  {
    question: "What are the eligibility criteria for a Qicky loan?",
    answer: "Eligibility generally includes being over 18, having a stable income, and a good credit history. Specific requirements may vary, and you can find detailed information during the application process.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, Qicky is committed to transparency. We ensure all fees and charges are clearly communicated upfront, with no hidden surprises.",
  },
  {
    question: "Can I repay my loan early?",
    answer: "Yes, we offer flexible repayment options, including the ability to repay your loan early without any prepayment penalties.",
  },
  {
    question: "How do I apply for a loan?",
    answer: "You can apply directly through our website by clicking the 'Apply Now' button. The process is 100% digital and requires minimal paperwork.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
          Frequently Asked <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">Questions</span>
        </h1>
        <p className="text-lg text-qicky-textmuted text-center mb-16 max-w-3xl mx-auto">
          Find answers to the most common questions about Qicky, our services, and the loan application process.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-qicky-blue/30">
                <AccordionTrigger className="text-lg font-semibold text-qicky-text hover:no-underline hover:text-qicky-lightblue transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-qicky-textmuted text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default FAQs;