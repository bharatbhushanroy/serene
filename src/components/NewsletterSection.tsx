"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      showError("Please enter your email address.");
      return;
    }
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    showSuccess(`Subscribed with ${email}!`);
    setEmail('');
  };

  const birdVariants = {
    fly: {
      x: ["0%", "10%", "0%", "-10%", "0%"],
      y: ["0%", "-10%", "0%", "10%", "0%"],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  const wingVariants = {
    flap: {
      rotate: [0, -20, 0, 20, 0], // Flap up and down
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const envelopeVariants = {
    float: {
      y: [0, -5, 0],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-newsletter-orange-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content: Text and Form */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-8"
          >
            Subscribe to our newsletter
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-none mx-auto lg:mx-0"
          >
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/50 text-white placeholder:text-white/70 px-6 py-3 rounded-full text-lg focus:border-white focus:ring-0"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-fintech-blue-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
            >
              <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Subscribe
            </Button>
          </motion.div>
        </div>

        {/* Right Content: Animated Illustration */}
        <div className="relative lg:w-1/2 flex items-center justify-center h-64 md:h-80 lg:h-96 w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            {/* White Cloud Shape */}
            <path
              d="M300 100 C400 0 600 50 600 150 C600 250 500 300 400 300 C300 300 200 250 200 150 C200 50 250 0 300 100Z"
              fill="hsl(var(--fintech-newsletter-cloud-white))"
            />
            {/* Light Blue Cloud Shape */}
            <path
              d="M350 150 C450 50 650 100 650 200 C650 300 550 350 450 350 C350 350 250 300 250 200 C250 100 300 50 350 150Z"
              fill="hsl(var(--fintech-newsletter-cloud-lightblue))"
              opacity="0.7"
            />

            {/* Animated Bird and Envelope Group */}
            <motion.g
              variants={birdVariants}
              animate="fly"
              initial="fly" // Start animation immediately
              transform="translate(150, 100)" // Initial position of the bird
            >
              {/* Bird Body (Yellow) */}
              <path d="M50 100 C70 80 120 80 140 100 C150 110 140 130 120 140 C100 150 70 150 50 130 C40 120 40 110 50 100Z" fill="hsl(var(--fintech-newsletter-bird-yellow))" />
              {/* Bird Head (Black) */}
              <circle cx="60" cy="100" r="20" fill="hsl(var(--fintech-newsletter-bird-black))" />
              {/* Bird Eye (White) */}
              <circle cx="55" cy="95" r="3" fill="white" />
              {/* Bird Beak (Orange) */}
              <path d="M75 95 L90 100 L75 105 Z" fill="hsl(var(--fintech-orange-accent))" />
              {/* Bird Wing 1 (Black) */}
              <motion.path
                d="M80 80 Q90 60 110 70 L100 90 Z"
                fill="hsl(var(--fintech-newsletter-bird-black))"
                transform-origin="90px 80px"
                variants={wingVariants}
                animate="flap"
              />
              {/* Bird Wing 2 (Black) */}
              <motion.path
                d="M80 120 Q90 140 110 130 L100 110 Z"
                fill="hsl(var(--fintech-newsletter-bird-black))"
                transform-origin="90px 120px"
                variants={wingVariants}
                animate="flap"
              />

              {/* Envelope (Blue) - positioned relative to the bird */}
              <motion.g
                variants={envelopeVariants}
                animate="float"
                transform="translate(120, 100)" // Position relative to bird's group
              >
                <rect x="0" y="0" width="40" height="30" fill="hsl(var(--fintech-blue-accent))" rx="5" />
                <path d="M0 0 L20 15 L40 0 Z" fill="hsl(var(--fintech-blue-accent))" />
                <path d="M0 30 L20 15 L40 30 Z" fill="hsl(var(--fintech-blue-accent))" />
              </motion.g>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;