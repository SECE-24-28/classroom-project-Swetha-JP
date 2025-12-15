import React from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';

const featuredPlans = [
  {
    id: 1,
    price: 199,
    type: 'Prepaid',
    validity: '28 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'OTT Benefits']
  },
  {
    id: 2,
    price: 399,
    type: 'Prepaid',
    validity: '56 days',
    data: '3GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Netflix Premium', 'Amazon Prime']
  },
  {
    id: 3,
    price: 599,
    type: 'Prepaid',
    validity: '84 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Disney+ Hotstar', 'Zee5 Premium']
  }
];

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Fast & Secure Mobile Recharge
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Recharge your mobile instantly with the best plans and offers. 
            Quick, reliable, and secure payments for all operators.
          </p>
          <div className="space-x-4">
            <Link 
              to="/plans" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Plans
            </Link>
            <Link 
              to="/signup" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Recharge</h3>
              <p className="text-gray-600">Get your recharge done in seconds with our lightning-fast service.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-gray-600">Your payments are protected with bank-level security.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Offers</h3>
              <p className="text-gray-600">Get exclusive cashback and offers on every recharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plans Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPlans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/plans" 
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and experience hassle-free recharges.</p>
          <Link 
            to="/signup" 
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;