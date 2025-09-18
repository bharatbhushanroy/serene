import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Clock, FileText, Download, Star, ArrowRight, Wifi, BatteryCharging } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component

const InstantLoansSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-bg text-white overflow-hidden">
      {/* Background gradients/shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
          animate={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-fintech-gradient-blue-start opacity-0 mix-blend-lighten"
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 100, y: 100 }}
          animate={{ opacity: 0.2, scale: 1.1, x: 0, y: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-fintech-gradient-purple-end opacity-0 mix-blend-lighten"
          style={{ filter: 'blur(90px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <p className="text-sm text-fintech-blue-soft uppercase tracking-widest mb-4 flex items-center justify-center lg:justify-start">
            <span className="w-8 h-0.5 bg-fintech-blue-soft mr-2"></span> FAST & SEAMLESS
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Instant Personal Loans <br />
            <span className="bg-gradient-to-r from-fintech-gradient-blue-start to-fintech-gradient-pink-end text-transparent bg-clip-text">
              At Your Fingertips
            </span>
          </h2>

          <div className="space-y-4">
            {/* Feature Cards */}
            <Link to="/apply-loan" className="block">
              <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-fintech-gradient-blue-start to-fintech-gradient-blue-end shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <LinkIcon className="h-6 w-6 mr-4 text-white" />
                  <span className="text-lg font-medium text-white">Instant Personal loans up to ₹5,00,000</span>
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
            <Link to="/apply-loan" className="block">
              <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-fintech-gradient-purple-start to-fintech-gradient-purple-end shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-4 text-white" />
                  <span className="text-lg font-medium text-white">Disbursement in <span className="font-bold">5 minutes</span></span>
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
            <Link to="/apply-loan" className="block">
              <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-fintech-gradient-pink-start to-fintech-gradient-pink-end shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 mr-4 text-white" />
                  <span className="text-lg font-medium text-white">100% Digital process with <span className="font-bold">Zero paperwork</span></span>
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
            <Link to="/apply-loan" className="block">
              <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-fintech-gradient-cyan-start to-fintech-gradient-cyan-end shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <Download className="h-6 w-6 mr-4 text-white" />
                  <span className="text-lg font-medium text-white">Money <span className="font-bold">transferred directly</span> to your bank account</span>
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image with Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative flex items-center justify-center h-[500px] lg:h-auto"
        >
          {/* Placeholder for the man holding the phone - using a dark background for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* This is where the image of the man would go if provided */}
            <div className="absolute w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/public/placeholder.svg')" }}></div>
          </div>

          {/* Phone Mockup */}
          <div className="relative z-10 w-72 h-[500px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-2">
            <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col items-center p-6">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>

              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-xs text-gray-500">9:41</span>
                <div className="flex items-center space-x-1">
                  <Wifi className="h-4 w-4 text-gray-700" />
                  <BatteryCharging className="h-4 w-4 text-gray-700" />
                </div>
              </div>

              <QickyLogo size="sm" className="mb-4" /> {/* Use the new QickyLogo component */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-fintech-star-yellow fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-fintech-text-dark text-center mb-6">"Instant loans, Simplified."</p>

              {/* Placeholder for app content */}
              <div className="flex-1 w-full bg-gray-100 rounded-lg p-4 text-sm text-gray-600 flex items-center justify-center">
                <p>App UI content here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Apply Now Button at the bottom right */}
      <Link to="/apply-loan" className="absolute bottom-8 right-8 z-20">
        <Button
          size="lg"
          className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group"
        >
          Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </section>
  );
};

export default InstantLoansSection;