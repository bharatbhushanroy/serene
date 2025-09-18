import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CreditCard, Check, Link as LinkIcon, ArrowRight } from 'lucide-react';

const TopUpLoansSection = () => {
  const features = [
    {
      icon: CreditCard,
      text: "Avail <span class='font-bold'>additional credit</span> over your existing loan",
      gradient: "from-fintech-card-pink-start to-fintech-card-pink-end",
    },
    {
      icon: Check,
      text: "Extended tenure of up to <span class='font-bold'>60 months</span>",
      gradient: "from-fintech-card-purple-start to-fintech-card-purple-end",
    },
    {
      icon: LinkIcon, // Using LinkIcon as a placeholder for the chain icon
      text: "Loan <span class='font-bold'>Top-ups</span> available when you need more",
      gradient: "from-fintech-card-blue-start to-fintech-card-blue-end",
    },
    {
      icon: Check,
      text: "No Bank Visits. <span class='font-bold'>No Queues!</span>",
      gradient: "from-fintech-card-darkblue-start to-fintech-card-darkblue-end",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-purple-bg text-white overflow-hidden">
      {/* Background gradients/shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -150, y: -150 }}
          animate={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-fintech-topup-gradient-start opacity-0 mix-blend-lighten"
          style={{ filter: 'blur(100px)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 150, y: 150 }}
          animate={{ opacity: 0.2, scale: 1.1, x: 0, y: 0 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-fintech-topup-gradient-end opacity-0 mix-blend-lighten"
          style={{ filter: 'blur(110px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image with Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center lg:justify-start h-[600px] lg:h-auto"
        >
          {/* Large image of woman holding phone */}
          <div className="absolute inset-0 bg-cover bg-center rounded-3xl shadow-2xl shadow-fintech-topup-gradient-end/30 overflow-hidden"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599059813231-17967020970e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            {/* Overlay to darken image slightly and add border effect */}
            <div className="absolute inset-0 bg-black/20 rounded-3xl border-4 border-fintech-dark-purple-bg"></div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute z-10 w-64 h-[450px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:ml-16">
            <div className="relative w-full h-full bg-fintech-phone-bg-blue rounded-[2rem] overflow-hidden flex flex-col items-center p-6">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>

              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-xs text-white/80">9:41</span>
                <div className="flex items-center space-x-1">
                  <img src="/public/placeholder.svg" alt="Signal" className="h-4 w-4 text-white/80" /> {/* Placeholder for signal icon */}
                  <img src="/public/placeholder.svg" alt="Wifi" className="h-4 w-4 text-white/80" /> {/* Placeholder for wifi icon */}
                  <img src="/public/placeholder.svg" alt="Battery" className="h-4 w-4 text-white/80" /> {/* Placeholder for battery icon */}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Qicky</h3>
              <p className="text-sm text-white/70 mb-4">8.99%</p>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Check key={i} className="h-5 w-5 text-fintech-phone-star-yellow fill-current" />
                ))}
              </div>
              <p className="text-xs text-white/70 mb-2">Smart finance. Simplified.</p>
              <p className="text-3xl font-bold text-white text-center leading-tight mb-8">Your Financial Freedom.</p>
              <Button className="bg-white text-fintech-phone-bg-blue px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
                COCUNET NOW
              </Button>
            </div>
          </div>

          <Link to="/about" className="absolute bottom-8 left-8 z-20">
            <Button
              variant="outline"
              className="bg-fintech-dark-purple-bg border-fintech-topup-line text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-fintech-topup-line/20 transition-all duration-300 group"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Right Side: Text and Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <p className="text-sm text-fintech-topup-line uppercase tracking-widest mb-4 flex items-center justify-center lg:justify-start">
            <span className="w-8 h-0.5 bg-fintech-topup-line mr-2"></span> TOP-UP OFFERING
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Elevate Your Finances <br />
            <span className="bg-gradient-to-r from-fintech-topup-gradient-start to-fintech-topup-gradient-end text-transparent bg-clip-text">
              With Our Top-Up Loans
            </span>
          </h2>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-5 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center">
                  <feature.icon className="h-6 w-6 mr-4 text-white" />
                  <span className="text-lg font-medium text-white" dangerouslySetInnerHTML={{ __html: feature.text }} />
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopUpLoansSection;