import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast'; // Assuming these are available

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and show a toast notification.
    console.log({ name, email, message });

    if (name && email && message) {
      showSuccess("Your message has been sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
    } else {
      showError("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
          Get in <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Touch</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Have questions or need assistance? Reach out to us through the form below or connect with us via our contact details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-fintech-text-dark mb-6">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-fintech-text-muted mb-2 block">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-fintech-text-muted mb-2 block">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-fintech-text-muted mb-2 block">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-fintech-background-offwhite border-fintech-border-light text-fintech-text-dark focus:border-fintech-blue-accent min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-fintech-text-dark mb-4">Contact Details</h3>
              <div className="space-y-4 text-fintech-text-muted">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-fintech-blue-accent mr-3" />
                  <span>info@qicky.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-fintech-blue-accent mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-fintech-blue-accent mr-3 mt-1" />
                  <span>123 Financial Street, Suite 400, Metropolis, State 12345</span>
                </div>
              </div>
            </Card>

            {/* Optional: Map Placeholder */}
            <Card className="bg-gradient-card-light border border-fintech-border-light p-8 rounded-xl shadow-lg h-64 flex items-center justify-center">
              <p className="text-fintech-text-muted text-lg">Map Placeholder</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ContactUs;