"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EthosSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          OUR <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">ETHOS</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Our success in the fast-paced business world is built on the unwavering strength and dedication of our team. We thrive by upholding the values and honor in everything we do.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Accountability & <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Excellence</span>
            </h3>
            <p className="text-lg text-fintech-text-muted max-w-md">
              We consistently strive for excellence in execution, dedicated to delivering our best in all our endeavors. By taking ownership of tasks, we build trust and promote a sense of responsibility.
            </p>
          </motion.div>

          {/* Right: Badge Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--fintech-blue-accent))" />
                  <stop offset="100%" stopColor="hsl(var(--fintech-gradient-purple-start))" />
                </linearGradient>
              </defs>
              {/* Main Badge Shape */}
              <path d="M100 0L125 50L190 55L140 100L160 160L100 130L40 160L60 100L10 55L75 50L100 0Z" fill="url(#badgeGradient)"/>
              {/* Ribbons */}
              <path d="M100 130L100 200L50 180L40 160L60 100L100 130Z" fill="url(#badgeGradient)"/>
              <path d="M100 130L100 200L150 180L160 160L140 100L100 130Z" fill="url(#badgeGradient)"/>
              {/* Star */}
              <path d="M100 70L109.549 90.9017L132.705 94.0983L116.353 110.902L120.09 134.098L100 123L79.9102 134.098L83.6472 110.902L67.2951 94.0983L90.451 90.9017L100 70Z" fill="hsl(var(--fintech-star-yellow))"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EthosSection;