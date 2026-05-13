import React from 'react';
import { Link } from 'react-router-dom';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f9fafb] text-[#111827]">
      <main className="flex-1">{children}</main>
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <Link to="/" className="font-semibold text-gray-900 hover:text-gray-700 transition-colors">TrendCanvas</Link>
            <span className="hidden md:inline mx-2">&copy; {new Date().getFullYear()}</span>
            <span className="md:hidden block mb-2">&copy; {new Date().getFullYear()}</span>
            <a href="mailto:adnanshafiq626@gmail.com" className="hover:text-gray-900 transition-colors">
              adnanshafiq626@gmail.com
            </a>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400 max-w-2xl mx-auto px-6">
          TrendCanvas is an independent tool and is not affiliated with, authorized, or endorsed by Pinterest Inc. or Etsy Inc.
        </div>
      </footer>
    </div>
  );
}
