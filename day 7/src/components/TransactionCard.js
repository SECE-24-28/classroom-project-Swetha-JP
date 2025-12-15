import React from 'react';
import { useApp } from './AppContext';

function TransactionCard({ transaction, showDetails = false }) {
  const { state } = useApp();

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${state.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-medium">{transaction.phoneNumber}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
              {transaction.status.toUpperCase()}
            </span>
          </div>
          
          <div className="text-sm text-gray-600 space-y-1">
            <p>Operator: {transaction.operator}</p>
            <p>Amount: ₹{transaction.amount}</p>
            {showDetails && (
              <>
                <p>Payment: {transaction.paymentMethod}</p>
                <p>Date: {new Date(transaction.timestamp).toLocaleDateString()}</p>
              </>
            )}
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-semibold">₹{transaction.amount}</div>
          <div className="text-xs text-gray-500">
            {new Date(transaction.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;