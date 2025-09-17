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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send these credentials to an authentication service.
    // For now, we'll just log them and show a toast notification.
    console.log({ email, password });

    if (email && password) {
      showSuccess("Login successful!");
      // Redirect to a dashboard or home page after successful login
      // navigate('/'); // You would use useNavigate hook here
    } else {
      showError("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-8 rounded-xl shadow-lg max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-qicky-text mb-4">
              Welcome <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Back</span>
            </CardTitle>
            <p className="text-qicky-textmuted text-lg">Sign in to your Qicky account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-qicky-textmuted mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-qicky-textmuted mb-2 block">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-qicky-dark border-qicky-blue/50 text-qicky-text focus:border-qicky-blue"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Login
              </Button>
            </form>
            <p className="text-center text-qicky-textmuted text-sm mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-qicky-blue hover:text-qicky-lightblue font-semibold">
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