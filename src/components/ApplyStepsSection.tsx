import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animations

interface ApplyStepsSectionProps {
  // isMobile: boolean; // Removed isMobile prop
}

const steps = [
  {
    number: "01",
    title: "Check Eligibility",
    description: "This typically involves assessing your creditworthiness, income and employment history.",
  },
  {
    number: "02",
    title: "Fill Loan Details",
    description: "Specific information about the borrower like their name, age, type of employment, phone number, reason for a loan, and loan bank details to give an informed decision to the lender.",
  },
  {
    number: "03",
    title: "Complete Your Verification",
    description: "This involves submitting documents for identity verification by the lender to confirm your identity.",
  },
  {
    number: "04",
    title: "Get Your Loan",
    description: "After the successful completion of these steps, the loan amount is disbursed to the borrower's account by the lender.",
  },
];

const ApplyStepsSection: React.FC<ApplyStepsSectionProps> = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-fintech-text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-16 text-white">
          Apply Loan in Simple Steps with <span className="text-fintech-orange-accent">Qicky</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Mobile Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end h-[500px] lg:h-auto">
            {/* Abstract shapes behind the phone */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-fintech-orange-accent/20 rounded-full blur-3xl opacity-70 rotate-45 transform -skew-y-12"></div>
            <div className="absolute -right-10 bottom-1/4 w-80 h-80 bg-fintech-orange-accent/10 rounded-full blur-3xl opacity-60 -rotate-12 transform skew-y-6"></div>

            {/* Phone Mockup with 3D effect */}
            <motion.div
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, y: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-64 h-[450px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' // Enhanced shadow
              }}
            >
              {/* Phone Screen */}
              <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>

                <CheckCircle className="w-24 h-24 text-fintech-green-success mb-6 mt-10" />
                <p className="text-lg font-semibold text-fintech-text-dark mb-2">Amount Successfully Disbursed</p>
                <p className="text-5xl font-bold text-fintech-orange-accent mb-8">₹ 10,000</p>
                <Link to="/">
                  <Button variant="outline" className="border-fintech-orange-accent text-fintech-orange-accent hover:bg-fintech-orange-accent/10">
                    Back to home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Steps */}
          <div className="relative space-y-8 text-left lg:pl-16">
            {/* Vertical connecting line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-fintech-orange-accent/50 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-fintech-orange-accent text-white flex items-center justify-center font-bold text-sm ring-4 ring-fintech-main-bg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-fintech-text-muted text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyStepsSection;