import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card } from '@/components/ui/card';
import { Users, Lightbulb, Target, Handshake } from 'lucide-react'; // Added Target, Handshake
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EthosSection from '@/components/EthosSection';
import TeamSection from '@/components/TeamSection';
import GrowthStorySection from '@/components/GrowthStorySection';
import AboutUsHeroSection from '@/components/AboutUsHeroSection'; // New import
import AnimatedGrowthIllustration from '@/components/AnimatedGrowthIllustration'; // New import
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import motion

const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-fintech-main-bg text-white">
      <Helmet>
        <title>About Qicky - Our Mission, Vision & Team</title>
        <meta name="description" content="Learn about Qicky's mission to provide fast, flexible, and transparent financial solutions. Discover our values, team, and growth story." />
      </Helmet>
      <Header />
      <main className="relative z-10">
        <AboutUsHeroSection /> {/* New Hero Section */}

        {/* Our Story Section */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Journey</span>
          </h2>
          <p className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto">
            Born from a vision to democratize finance in India, Qicky embarked on a journey to simplify access to credit. We saw a gap between traditional banking complexities and the urgent financial needs of millions. Our founders, a team of seasoned fintech innovators, leveraged cutting-edge technology to build a platform that is not just fast and efficient, but also transparent and trustworthy. Since our inception, we've been committed to empowering individuals and businesses, transforming financial aspirations into reality with every loan disbursed.
          </p>
          <motion.div
            className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-fintech-border-light object-cover aspect-video flex items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatedGrowthIllustration /> {/* Replaced static image with animation */}
          </motion.div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={cardVariants} className="space-y-8">
            <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg h-full">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-fintech-blue-accent mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-fintech-text-muted text-lg">
                To empower every Indian with seamless, transparent, and accessible financial solutions, fostering economic growth and personal prosperity through innovative digital lending.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} className="space-y-8">
            <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg h-full">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-fintech-blue-accent mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-fintech-text-muted text-lg">
                To be the most trusted and preferred digital financial partner in India, setting new benchmarks for customer experience, technological excellence, and social impact.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
            Core <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariants}>
              <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg h-full">
                <div className="flex items-center justify-center mb-4">
                  <Handshake className="h-8 w-8 text-fintech-orange-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity & Trust</h3>
                <p className="text-fintech-text-muted text-base">
                  Upholding the highest ethical standards and fostering transparent relationships with our customers.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} custom={1}>
              <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg h-full">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-fintech-green-success" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation & Agility</h3>
                <p className="text-fintech-text-muted text-base">
                  Continuously evolving our technology and services to meet the dynamic needs of the market.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} custom={2}>
              <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg h-full">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-fintech-blue-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Customer Centricity</h3>
                <p className="text-fintech-text-muted text-base">
                  Placing our customers at the heart of every decision, ensuring their financial well-being.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Existing Sections */}
        <EthosSection />
        <TeamSection />
        {/* <GrowthStorySection /> */}

        <motion.div
          className="text-center mt-20 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Join the <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Qicky Family</span>
          </h2>
          <p className="text-lg text-fintech-text-muted mb-8 max-w-3xl mx-auto">
            Whether you're looking for a quick loan or a long-term financial partner, Qicky is here to support you every step of the way. Experience the future of lending today.
          </p>
          <Link to="/apply-loan">
            <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Apply for a Loan
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
      {/* <MadeWithDyad /> */}
    </div>
  );
};

export default AboutUs;