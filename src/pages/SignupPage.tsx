"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // New import

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });

    if (name && email && password) {
      showSuccess("Registration successful! Please log in.");
    } else {
      showError("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Helmet>
        <title>Sign Up for Qicky - Start Your Financial Journey</title>
        <meta name="description" content="Create your Qicky account today to apply for instant loans, explore financial products, and manage your money with ease." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-white mb-4">
              <h1>Join <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Qicky</span></h1>
            </CardTitle>
            <p className="text-fintech-text-muted text-lg">Create your account to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-fintech-text-muted mb-2 block">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-fintech-text-muted mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-fintech-text-muted mb-2 block">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Button>
            </form>
            <p className="text-center text-fintech-text-muted text-sm mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-fintech-blue-accent hover:text-fintech-blue-soft font-semibold">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default SignupPage;