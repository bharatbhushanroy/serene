import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8 text-white">
          Terms of <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Service</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          These terms and conditions outline the rules and regulations for the use of Qicky's Website.
        </p>

        <div className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg text-white prose max-w-none">
          <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Qicky website and services, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to these terms, you may not access or use our services.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>You are responsible for safeguarding the password that you use to access the Service.</li>
            <li>You agree not to disclose your password to any third party.</li>
            <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">4. Prohibited Uses</h2>
          <p>You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Qicky and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Qicky.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Qicky, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at info@qicky.com.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default TermsOfService;