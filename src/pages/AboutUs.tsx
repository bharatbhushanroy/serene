import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card } from '@/components/ui/card';
import { Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
          About <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Qicky</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          At Qicky, we believe in empowering individuals with fast, flexible, and transparent financial solutions. Our mission is to simplify the loan process and make financial freedom accessible to everyone.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-fintech-blue-accent mr-4" />
                <h2 className="text-3xl font-bold text-fintech-text-dark">Our Vision</h2>
              </div>
              <p className="text-fintech-text-muted text-lg">
                To be the leading digital lending platform, recognized for our innovative approach, customer-centric services, and commitment to financial inclusion. We envision a world where financial support is just a click away, without the traditional hurdles.
              </p>
            </Card>
            <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-fintech-blue-accent mr-4" />
                <h2 className="text-3xl font-bold text-fintech-text-dark">Our Values</h2>
              </div>
              <ul className="list-disc list-inside text-fintech-text-muted text-lg space-y-2">
                <li><span className="font-semibold text-fintech-text-dark">Transparency:</span> No hidden fees, clear terms.</li>
                <li><span className="font-semibold text-fintech-text-dark">Innovation:</span> Leveraging technology for a better experience.</li>
                <li><span className="font-semibold text-fintech-text-dark">Customer Focus:</span> Your needs are our priority.</li>
                <li><span className="font-semibold text-fintech-text-dark">Integrity:</span> Honest and ethical practices.</li>
              </ul>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Our team working together"
              className="w-full max-w-lg rounded-xl shadow-2xl border border-fintech-border-light object-cover aspect-square"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Join the <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Qicky Family</span>
          </h2>
          <p className="text-lg text-fintech-text-muted mb-8 max-w-3xl mx-auto">
            Whether you're looking for a quick loan or a long-term financial partner, Qicky is here to support you every step of the way. Experience the future of lending today.
          </p>
          <Link to="/apply-loan">
            <Button className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Apply for a Loan
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default AboutUs;