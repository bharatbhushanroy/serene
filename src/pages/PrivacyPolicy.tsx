import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8 text-white">
          Privacy <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Policy</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>

        <div className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg text-white prose max-w-none">
          <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us. This may include your name, email address, phone number, financial information, and identification documents.
          </p>
          <p>
            We also collect information automatically when you use our services, such as your IP address, device information, browser type, and usage data.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Process your loan applications and transactions.</li>
            <li>Communicate with you, including sending updates and promotional materials.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">3. Sharing Your Information</h2>
          <p>
            We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and marketing. We may also share information with our affiliates or in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">4. Security</h2>
          <p>
            We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">5. Your Choices</h2>
          <p>
            You may review, update, or delete your account information by logging into your account. You can also opt-out of receiving promotional communications from us by following the instructions in those communications.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by posting the new policy on our website or by other means.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@qicky.com.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default PrivacyPolicy;