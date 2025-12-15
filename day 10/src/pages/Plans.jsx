import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { PLANS } from '../utils/constants';

const allPlans = [
  ...PLANS,
  {
    id: 4,
    price: 99,
    type: 'Prepaid',
    validity: '14 days',
    data: '1GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming'],
    popular: false
  },
  {
    id: 5,
    price: 999,
    type: 'Postpaid',
    validity: '30 days',
    data: '100GB',
    voice: 'Unlimited',
    sms: 'Unlimited',
    benefits: ['Free Roaming', 'All OTT Apps', 'International Roaming'],
    popular: false
  },
  {
    id: 6,
    price: 1499,
    type: 'Postpaid',
    validity: '30 days',
    data: '200GB',
    voice: 'Unlimited',
    sms: 'Unlimited',
    benefits: ['Free Roaming', 'Premium OTT', 'International Roaming', 'Priority Support'],
    popular: false
  }
];

function Plans() {
  const { state } = useApp();
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const filteredPlans = allPlans
    .filter(plan => selectedType === 'all' || plan.type.toLowerCase() === selectedType)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'validity') return parseInt(a.validity) - parseInt(b.validity);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recharge Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs with great benefits and offers
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="font-medium text-gray-700">Plan Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="input-field w-auto"
              >
                <option value="all">All Plans</option>
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <label className="font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field w-auto"
              >
                <option value="price">Price (Low to High)</option>
                <option value="validity">Validity</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlans.map(plan => (
            <Card key={plan.id} hover className="relative animate-slide-up">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-500 mb-2">₹{plan.price}</div>
                <div className="text-sm text-gray-500 mb-1">{plan.type}</div>
                <div className="inline-block bg-secondary-50 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {plan.validity}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{plan.data}</div>
                    <div className="text-gray-600">Data</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{plan.voice}</div>
                    <div className="text-gray-600">Voice</div>
                  </div>
                </div>
                
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{plan.sms}</div>
                  <div className="text-gray-600 text-sm">SMS</div>
                </div>
              </div>

              {plan.benefits && (
                <div className="mb-6">
                  <p className="font-medium text-gray-700 mb-3">Benefits:</p>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2 text-lg">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button 
                className="w-full" 
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
              >
                Select Plan
              </Button>
            </Card>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📱</div>
            <p className="text-gray-500 text-lg">No plans found matching your criteria.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prepaid Plans</h3>
              <p className="text-gray-600">
                Perfect for users who want control over their spending. Pay in advance and enjoy 
                flexible recharge options with no monthly commitments.
              </p>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Postpaid Plans</h3>
              <p className="text-gray-600">
                Ideal for heavy users who need consistent connectivity. Get higher data limits, 
                premium benefits, and pay at the end of the month.
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        {state.isLoggedIn && (
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Recharge?</h3>
              <p className="mb-6 opacity-90">
                Choose your plan and recharge instantly with our secure payment system.
              </p>
              <Button className="bg-white text-primary-600 hover:bg-gray-100">
                Start Recharge
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plans;