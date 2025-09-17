import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card } from '@/components/ui/card';
import { Users, Lightbulb, Handshake } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
          About <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Qicky</span>
        </h1>
        <p className="text-lg text-qicky-textmuted text-center mb-16 max-w-3xl mx-auto">
          At Qicky, we believe in empowering individuals with fast, flexible, and transparent financial solutions. Our mission is to simplify the loan process and make financial freedom accessible to everyone.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-qicky-lightblue mr-4" />
                <h2 className="text-3xl font-bold text-qicky-text">Our Vision</h2>
              </div>
              <p className="text-qicky-textmuted text-lg">
                To be the leading digital lending platform, recognized for our innovative approach, customer-centric services, and commitment to financial inclusion. We envision a world where financial support is just a click away, without the traditional hurdles.
              </p>
            </Card>
            <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-qicky-pink mr-4" />
                <h2 className="text-3xl font-bold text-qicky-text">Our Values</h2>
              </div>
              <ul className="list-disc list-inside text-qicky-textmuted text-lg space-y-2">
                <li><span className="font-semibold text-qicky-text">Transparency:</span> No hidden fees, clear terms.</li>
                <li><span className="font-semibold text-qicky-text">Innovation:</span> Leveraging technology for a better experience.</li>
                <li><span className="font-semibold text-qicky-text">Customer Focus:</span> Your needs are our priority.</li>
                <li><span className="font-semibold text-qicky-text">Integrity:</span> Honest and ethical practices.</li>
              </ul>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/public/placeholder.svg" // Placeholder image for About Us section
              alt="About Us"
              className="w-full max-w-lg rounded-xl shadow-2xl border border-qicky-blue/30"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Join the <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">Qicky Family</span>
          </h2>
          <p className="text-lg text-qicky-textmuted mb-8 max-w-3xl mx-auto">
            Whether you're looking for a quick loan or a long-term financial partner, Qicky is here to support you every step of the way. Experience the future of lending today.
          </p>
          <Button className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
            Apply for a Loan
          </Button>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default AboutUs;