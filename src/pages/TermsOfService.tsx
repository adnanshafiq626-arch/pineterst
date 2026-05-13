import React from 'react';
import AppLayout from '../components/AppLayout';

export default function TermsOfService() {
  return (
    <AppLayout>
      <div className="bg-white pt-24 pb-32 min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-gray max-w-none text-gray-600 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using TrendCanvas, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our service. This tool is designed as an independent research utility to assist creators and small ecommerce brands in analyzing visual trends.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptable Use</h2>
              <p>
                You agree to use our service only for lawful purposes. You must not use TrendCanvas:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>In any way that breaches any applicable local, national, or international law or regulation.</li>
                <li>To engage in automated or mass scraping, bulk extraction, or any activity that artificially inflates platform usage metrics.</li>
                <li>To harass, abuse, or harvest data belonging to other users without their consent.</li>
                <li>To build a competitive product by reverse-engineering our methodology.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. API Usage Compliance</h2>
              <p>
                Our services utilize the Pinterest API to display inspiration and trend data. By using TrendCanvas, you also agree to be bound by Pinterest's Terms of Service and API policies. You must not use our tool to bypass, overload, or otherwise abuse the official API rate limits or intended usage guidelines established by platform providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Account Responsibilities</h2>
              <p>
                When you connect your account, you are responsible for safeguarding any passwords or authentication tokens used to access the service. You agree not to share your account credentials with unauthorized third parties. We reserve the right to suspend or terminate accounts that demonstrate suspicious or abusive behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall TrendCanvas, nor its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer of Affiliation</h2>
              <p>
                TrendCanvas is an independent application. We are not officially affiliated, associated, authorized, endorsed by, or in any way officially connected with Pinterest Inc., Etsy Inc., or any of their subsidiaries or affiliates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please reach out to us at:
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
