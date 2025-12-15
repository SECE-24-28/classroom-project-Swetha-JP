import React, { useState } from 'react';
import { useApp } from './AppContext';

function RechargeForm({ operators, onRecharge }) {
  const { state, dispatch } = useApp();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    operator: '',
    amount: '',
    paymentMethod: 'wallet'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phoneNumber || !formData.operator || !formData.amount) {
      alert('Please fill all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const transaction = {
        id: Date.now(),
        ...formData,
        status: 'success',
        timestamp: new Date().toISOString()
      };
      
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
      dispatch({ type: 'UPDATE_BALANCE', payload: state.balance - parseInt(formData.amount) });
      dispatch({ 
        type: 'ADD_NOTIFICATION', 
        payload: { 
          id: Date.now(), 
          message: `Recharge of ₹${formData.amount} successful!`,
          type: 'success'
        }
      });
      
      onRecharge && onRecharge(transaction);
      setFormData({ phoneNumber: '', operator: '', amount: '', paymentMethod: 'wallet' });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Mobile Recharge</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            placeholder="Enter 10-digit mobile number"
            maxLength="10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Operator</label>
          <select
            value={formData.operator}
            onChange={(e) => setFormData({...formData, operator: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Operator</option>
            {operators.map(op => (
              <option key={op.id} value={op.name}>{op.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            placeholder="Enter amount"
            min="10"
            max="5000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="wallet">Wallet</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Recharge Now'}
        </button>
      </form>
    </div>
  );
}

export default RechargeForm;