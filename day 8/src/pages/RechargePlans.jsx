import React, { useState } from 'react';
import PlanCard from '../components/PlanCard';

const allPlans = [
  {
    id: 1,
    price: 99,
    type: 'Prepaid',
    validity: '14 days',
    data: '1GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming']
  },
  {
    id: 2,
    price: 199,
    type: 'Prepaid',
    validity: '28 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'OTT Benefits']
  },
  {
    id: 3,
    price: 299,
    type: 'Prepaid',
    validity: '28 days',
    data: '3GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Netflix Basic']
  },
  {
    id: 4,
    price: 399,
    type: 'Prepaid',
    validity: '56 days',
    data: '3GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Netflix Premium', 'Amazon Prime']
  },
  {
    id: 5,
    price: 599,
    type: 'Prepaid',
    validity: '84 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Disney+ Hotstar', 'Zee5 Premium']
  },
  {
    id: 6,
    price: 999,
    type: 'Postpaid',
    validity: '30 days',
    data: '100GB',
    voice: 'Unlimited',
    sms: 'Unlimited',
    benefits: ['Free Roaming', 'All OTT Apps', 'International Roaming']
  }
];

function RechargePlans() {
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recharge Plans</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="font-medium text-gray-700">Plan Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="price">Price (Low to High)</option>
                <option value="validity">Validity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No plans found matching your criteria.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Prepaid Plans</h3>
              <p className="text-gray-600">
                Perfect for users who want control over their spending. Pay in advance and enjoy 
                flexible recharge options with no monthly commitments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Postpaid Plans</h3>
              <p className="text-gray-600">
                Ideal for heavy users who need consistent connectivity. Get higher data limits, 
                premium benefits, and pay at the end of the month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechargePlans;