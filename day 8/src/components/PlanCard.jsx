import React from 'react';

function PlanCard({ plan }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">₹{plan.price}</h3>
          <p className="text-sm text-gray-600">{plan.type}</p>
        </div>
        <span className="bg-secondary text-white px-2 py-1 rounded text-sm">
          {plan.validity}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
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
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Benefits:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {plan.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600 transition-colors">
        Select Plan
      </button>
    </div>
  );
}

export default PlanCard;