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
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send these credentials to an authentication service.
    // For now, we'll just log them and show a toast notification.
    console.log({ email, password });

    if (email && password) {
      showSuccess("Login successful!");
      navigate('/dashboard'); // Redirect to the new dashboard page
    } else {
      showError("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-fintech-text-dark mb-4">
              Welcome <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Back</span>
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
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent"
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
                  className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
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