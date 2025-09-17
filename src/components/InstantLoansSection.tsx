import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import LoanApprovedMockup from './LoanApprovedMockup';
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes'; // Import the new component

const InstantLoansSection = () => {
  return (
    <section className="relative bg-fintech-background-light text-fintech-text-dark py-20 sm:py-32 overflow-hidden">
      {/* Animated Background Shapes */}
      <AnimatedBackgroundShapes />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="z-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Instant Loans, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft">
                Lightning Fast Approval
              </span>
            </h2>
            <p className="text-lg text-fintech-text-muted mb-8 max-w-lg">
              Need funds in a hurry? Qicky provides a seamless and rapid loan application process. Get the financial support you need, right when you need it, without the traditional banking hassle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-button-primary text-white">Apply Now</Button>
              <Button size="lg" variant="outline" className="border-fintech-blue-accent text-fintech-blue-accent hover:bg-fintech-blue-soft/10 hover:text-fintech-blue-accent">
                How It Works
              </Button>
            </div>
          </motion.div>

          {/* Image/Mockup Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative h-96 md:h-auto flex items-center justify-center"
          >
            <LoanApprovedMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstantLoansSection;