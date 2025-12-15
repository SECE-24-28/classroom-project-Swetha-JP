import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { PLANS } from '../utils/constants';

function Home() {
  const { state } = useApp();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast & Secure
              <span className="block text-accent-500">Mobile Recharge</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Experience lightning-fast recharges with advanced form validation, 
              secure payments, and real-time updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={state.isLoggedIn ? "/recharge" : "/signup"}>
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100">
                  {state.isLoggedIn ? "Recharge Now" : "Get Started"}
                </Button>
              </Link>
              <Link to="/plans">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern React concepts and best practices for the ultimate user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Instant Processing',
                description: 'Lightning-fast recharges with real-time status updates and notifications'
              },
              {
                icon: '🔒',
                title: 'Secure & Validated',
                description: 'Advanced form validation with Yup and secure payment processing'
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Perfect experience across all devices - mobile, tablet, and desktop'
              },
              {
                icon: '🎨',
                title: 'Modern UI/UX',
                description: 'Beautiful interface with dark mode, animations, and smooth interactions'
              }
            ].map((feature, index) => (
              <Card key={index} hover className="text-center animate-slide-up">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Recharge Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our most popular plans with great benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLANS.map(plan => (
              <Card key={plan.id} hover className="relative">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary-500 mb-2">₹{plan.price}</div>
                  <div className="text-sm text-gray-500">{plan.type} • {plan.validity}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-medium">{plan.data}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Voice:</span>
                    <span className="font-medium">{plan.voice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SMS:</span>
                    <span className="font-medium">{plan.sms}</span>
                  </div>
                </div>

                {plan.benefits && (
                  <div className="mb-6">
                    <p className="font-medium text-gray-700 mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {plan.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
                  Select Plan
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/plans">
              <Button variant="outline" size="lg">
                View All Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {state.isLoggedIn && (
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">₹{state.balance}</div>
                <div className="text-gray-600">Wallet Balance</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">{state.transactions.length}</div>
                <div className="text-gray-600">Total Recharges</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">
                  ₹{state.transactions.reduce((sum, t) => sum + t.amount, 0)}
                </div>
                <div className="text-gray-600">Total Spent</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Future of Recharges?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied users and enjoy seamless, validated, and secure recharges.
          </p>
          {!state.isLoggedIn && (
            <Link to="/signup">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Create Free Account
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;