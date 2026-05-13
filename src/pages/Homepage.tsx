import React from 'react';
import AppLayout from '../components/AppLayout';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Grid, Search, BarChart3, Workflow } from 'lucide-react';

export default function Homepage() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Pinterest Research for <span className="text-gray-400">Etsy Sellers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover trends, analyze visual inspiration, and organize your product research workflows using real Pinterest data.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-sm">
              Request Access
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f9fafb] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Built for visual research</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Everything you need to turn Pinterest inspiration into actionable Etsy product strategies.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TrendingUp size={24} className="text-gray-700" />}
              title="Discover Trending Ideas"
              description="Identify rising aesthetic trends and popular pin styles before they saturate the market."
            />
            <FeatureCard 
              icon={<Grid size={24} className="text-gray-700" />}
              title="Organize Inspiration"
              description="Collect and categorize visual inspiration systematically for your upcoming product lines."
            />
            <FeatureCard 
              icon={<Search size={24} className="text-gray-700" />}
              title="Niche Research"
              description="Analyze specific niches and identify gaps where new products could perform well."
            />
            <FeatureCard 
              icon={<Workflow size={24} className="text-gray-700" />}
              title="Save & Manage Boards"
              description="Keep your research structured. Save analysis and reference images to specialized boards."
            />
            <FeatureCard 
              icon={<BarChart3 size={24} className="text-gray-700" />}
              title="Lightweight Insights"
              description="Understand what types of visual content perform best in your target categories."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-16">How it works</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting line for larger screens */}
            <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-gray-200 z-0"></div>

            <Step 
              number="1"
              title="Connect Account"
              description="Securely link your Pinterest account via our official API integration."
            />
            <Step 
              number="2"
              title="Discover"
              description="Search and organize visual inspiration relevant to your shop."
            />
            <Step 
              number="3"
              title="Analyze"
              description="Research macro trends and specific product idea viability."
            />
            <Step 
              number="4"
              title="Execute"
              description="Build better, data-informed Etsy content strategies."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f9fafb] py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">About TrendCanvas</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            TrendCanvas is an independent research utility designed specifically for creators, Etsy sellers, and small ecommerce brands. Our goal is to help you better understand Pinterest trends and visual content opportunities without the noise. We believe in building simple, professional tools that respect user data and adhere strictly to official platform guidelines.
          </p>
        </div>
      </section>

    </AppLayout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-[24px] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all">
      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md border-4 border-white">
        {number}
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center leading-relaxed">{description}</p>
    </div>
  );
}
