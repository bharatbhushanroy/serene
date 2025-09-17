import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-brand-orange to-brand-light-orange p-12 rounded-2xl shadow-lg shadow-brand-orange/30">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers and take the first step towards your financial goals. Apply now for a quick and easy loan.
        </p>
        <Link to="/apply-loan">
          <Button
            size="lg"
            className="bg-white text-brand-orange px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors group"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;