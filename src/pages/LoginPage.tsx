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
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // New import

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy credentials for demonstration
  const DUMMY_EMAIL = 'test@example.com';
  const DUMMY_PASSWORD = 'password123';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      showSuccess("Login successful!");
      navigate('/dashboard');
    } else {
      showError("Invalid email or password. Please use the dummy credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Helmet>
        <title>Login to Qicky - Access Your Account</title>
        <meta name="description" content="Log in to your Qicky account to manage your loans, track applications, and access personalized financial tools." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-white mb-4">
              <h1>Welcome <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Back</span></h1>
            </CardTitle>
            <p className="text-fintech-text-muted text-lg">Sign in to your Qicky account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-fintech-text-muted mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={DUMMY_EMAIL}
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
                  placeholder={DUMMY_PASSWORD}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white focus:border-fintech-blue-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Login
              </Button>
            </form>
            <p className="text-center text-fintech-text-muted text-sm mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-fintech-blue-accent hover:text-fintech-blue-soft font-semibold">
                Sign Up
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

export default LoginPage;