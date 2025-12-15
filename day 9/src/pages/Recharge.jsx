import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { rechargeSchema } from '../schemas/validationSchemas';

const operators = [
  { id: 1, name: 'Airtel', code: 'AIR' },
  { id: 2, name: 'Jio', code: 'JIO' },
  { id: 3, name: 'Vi', code: 'VI' },
  { id: 4, name: 'BSNL', code: 'BSNL' }
];

const paymentMethods = [
  { id: 'wallet', name: 'Wallet' },
  { id: 'card', name: 'Credit/Debit Card' },
  { id: 'upi', name: 'UPI' },
  { id: 'netbanking', name: 'Net Banking' }
];

function Recharge() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(rechargeSchema),
    defaultValues: {
      paymentMethod: 'wallet'
    }
  });

  const watchedAmount = watch('amount');

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Recharge of ₹${data.amount} for ${data.phoneNumber} successful!`);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mobile Recharge</h1>
          <p className="mt-2 text-gray-600">Quick and secure mobile recharge</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                {...register('phoneNumber')}
                type="tel"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="operator" className="block text-sm font-medium text-gray-700">
                Select Operator *
              </label>
              <select
                {...register('operator')}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.operator ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Choose your operator</option>
                {operators.map(op => (
                  <option key={op.id} value={op.code}>{op.name}</option>
                ))}
              </select>
              {errors.operator && (
                <p className="mt-1 text-sm text-red-600">{errors.operator.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Recharge Amount *
              </label>
              <input
                {...register('amount')}
                type="number"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.amount ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter amount (₹10 - ₹5000)"
                min="10"
                max="5000"
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
              )}
              
              {/* Quick Amount Buttons */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Quick amounts:</p>
                <div className="grid grid-cols-4 gap-2">
                  {[99, 199, 299, 499].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        const event = { target: { name: 'amount', value: amount } };
                        register('amount').onChange(event);
                      }}
                      className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                Payment Method *
              </label>
              <select
                {...register('paymentMethod')}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                {paymentMethods.map(method => (
                  <option key={method.id} value={method.id}>{method.name}</option>
                ))}
              </select>
              {errors.paymentMethod && (
                <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
              )}
            </div>

            {/* Summary */}
            {watchedAmount && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Recharge Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>₹{watchedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-1">
                    <span>Total:</span>
                    <span>₹{watchedAmount}</span>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing Recharge...' : 'Recharge Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recharge;