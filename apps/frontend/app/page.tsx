'use client';

import React from 'react';
import { Activity, Shield, Clock, Bell, CheckCircle, Server, Globe, Zap } from 'lucide-react';

// Define prop types for the components
interface StatCardProps {
  number: string;
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with animated gradient background */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/90 to-gray-100/90" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 space-y-2">
              <span className="block">Monitor Your Services</span>
              <span className="block text-gray-600">With Confidence</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Get instant alerts when your services go down. Monitor websites, APIs, and servers with 
              powerful monitoring tools and real-time notifications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                Start 14-Day Free Trial
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all">
                Schedule Demo
              </button>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-700" />
                <span className="ml-2 text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-700" />
                <span className="ml-2 text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="99.9%" text="Average Uptime" />
            <StatCard number="15s" text="Response Time" />
            <StatCard number="50+" text="Global Locations" />
            <StatCard number="24/7" text="Support Available" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Everything you need for reliable monitoring
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features to ensure your services are always up and running
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-gray-700" />}
              title="Website Monitoring"
              description="Monitor your websites with advanced HTTP/HTTPS checks and custom intervals."
            />
            <FeatureCard
              icon={<Server className="h-8 w-8 text-gray-700" />}
              title="API Monitoring"
              description="Keep track of your API endpoints with detailed response validation."
            />
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-gray-700" />}
              title="Instant Alerts"
              description="Get notified immediately via SMS, email, Slack, or webhook when issues occur."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-gray-700" />}
              title="SSL Certificate Monitoring"
              description="Never miss an SSL certificate expiration with automated checks."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-gray-700" />}
              title="Uptime Reports"
              description="Generate detailed uptime reports and share them with stakeholders."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-gray-700" />}
              title="Fast Response"
              description="Global monitoring network ensures quick detection of issues."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold">Product</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3">
                <Activity className="h-8 w-8 text-gray-700" />
                <span className="text-xl font-bold text-gray-900">BetterUptime</span>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="mt-4 md:mt-0 text-gray-600">© 2025 BetterUptime. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
      <p className="text-3xl font-bold text-gray-900">{number}</p>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}