import React, { useState, useEffect } from 'react';
import { plansAPI } from '../api/axios';
import PlanCard from '../components/PlanCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('all');

  const operators = ['all', 'Airtel', 'Jio', 'Vi', 'BSNL'];

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await plansAPI.getPlans();
      setPlans(response.data);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch plans');
    } finally {
      setLoading(false);
    }
  };

  const filteredPlans = selectedOperator === 'all' 
    ? plans 
    : plans.filter(plan => plan.operator === selectedOperator);

  if (loading) {
    return <LoadingSpinner message="Loading recharge plans..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recharge Plans
          </h1>
          <p className="text-gray-600">
            Choose the perfect plan for your mobile recharge
          </p>
        </div>

        {/* Operator Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {operators.map((operator) => (
              <button
                key={operator}
                onClick={() => setSelectedOperator(operator)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedOperator === operator
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {operator === 'all' ? 'All Operators' : operator}
              </button>
            ))}
          </div>
        </div>

        {error ? (
          <ErrorMessage message={error} onRetry={fetchPlans} />
        ) : filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3"></path>
              </svg>
              <p className="text-lg">No plans available</p>
              <p className="text-sm">
                {selectedOperator === 'all' 
                  ? 'No recharge plans found' 
                  : `No plans available for ${selectedOperator}`}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => (
              <PlanCard key={plan._id} plan={plan} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;