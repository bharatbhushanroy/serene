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

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a registration service.
    // For now, we'll just log it and show a toast notification.
    console.log({ name, email, password });

    if (name && email && password) {
      showSuccess("Registration successful! Please log in.");
      // Redirect to login page after successful registration
      // navigate('/login'); // You would use useNavigate hook here
    } else {
      showError("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center justify-center">
        <Card className="bg-gradient-dark-card border border-qicky-border p-8 rounded-xl shadow-lg max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-qicky-text mb-4">
              Join <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Qicky</span>
            </CardTitle>
            <p className="text-qicky-textmuted text-lg">Create your account to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-qicky-textmuted mb-2 block">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-qicky-textmuted mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
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
                  className="bg-qicky-dark border-qicky-border text-qicky-text focus:border-qicky-purple"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Button>
            </form>
            <p className="text-center text-qicky-textmuted text-sm mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-qicky-purple hover:text-qicky-blue font-semibold">
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