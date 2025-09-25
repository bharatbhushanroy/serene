import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8 text-white">
          Cookie <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Policy</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          This policy explains how Qicky uses cookies and similar technologies on our website.
        </p>

        <div className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg text-white prose max-w-none">
          <h2 className="text-3xl font-bold text-white mb-4">1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h2>
          <p>We use cookies for several purposes:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><span className="font-semibold text-white">Essential Cookies:</span> These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</li>
            <li><span className="font-semibold text-white">Performance Cookies:</span> These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
            <li><span className="font-semibold text-white">Functionality Cookies:</span> These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
            <li><span className="font-semibold text-white">Targeting Cookies:</span> These may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">3. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">4. Your Choices Regarding Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie consent banner or by modifying your browser settings.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Most web browsers are set to accept cookies by default.</li>
            <li>You can usually modify your browser setting to decline cookies if you prefer.</li>
            <li>If you choose to decline cookies, some features of our website may not function properly.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">5. More Information</h2>
          <p>
            If you have any questions about this Cookie Policy, please contact us at info@qicky.com.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default CookiePolicy;