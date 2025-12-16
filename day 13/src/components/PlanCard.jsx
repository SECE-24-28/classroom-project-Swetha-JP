import React from 'react';

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{plan.planName}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
          {plan.operator}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-blue-600 mb-2">
          ₹{plan.price}
        </div>
        <div className="text-gray-600 text-sm">
          Valid for {plan.validity} days
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Data:</span>
          <span className="font-medium">{plan.data}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Talk Time:</span>
          <span className="font-medium">{plan.talkTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">SMS:</span>
          <span className="font-medium">{plan.sms}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
        Recharge Now
      </button>
    </div>
  );
};

export default PlanCard;