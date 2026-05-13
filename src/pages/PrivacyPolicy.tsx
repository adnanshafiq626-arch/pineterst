import React from 'react';
import AppLayout from '../components/AppLayout';

export default function PrivacyPolicy() {
  return (
    <AppLayout>
      <div className="bg-white pt-24 pb-32 min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to TrendCanvas ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data Collection and Pinterest Integration</h2>
              <p>
                To provide our core research functionality, TrendCanvas utilizes the official Pinterest API via a secure OAuth connection. When you authenticate your account, we only request the specific permissions strictly necessary to summarize trends and organize visual references.
              </p>
              <p className="mt-4">
                We may process data such as saved pins, board structures, and high-level engagement metrics. Importantly, we only access data that you explicitly grant us permission to view.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Data Handling</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services. Our system is designed to act as a lightweight research utility. We do not unnecessarily archive or persistently store large volumes of your Pinterest data. Your authentication tokens are stored securely using industry-standard encryption practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. No Selling of Personal Data</h2>
              <p>
                <strong>We do not, and will never, sell your personal data to third parties.</strong> Our business model relies on providing a valuable tool to our users, not monetizing your private information. We do not engage in data brokering or share your data with advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Deletion Requests</h2>
              <p>
                You have the right to request the deletion of your personal data held by us. You may revoke our application's access to your Pinterest account directly from your Pinterest settings at any time. Furthermore, if you wish for us to purge any account metadata associated with your email address or user profile, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, data deletion requests, or our privacy practices, please contact us at:
              </p>
              <p className="mt-2 font-medium text-gray-900">
                Email: <a href="mailto:adnanshafiq626@gmail.com" className="hover:underline">adnanshafiq626@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
