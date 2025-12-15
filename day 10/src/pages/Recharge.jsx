import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { rechargeSchema } from '../schemas/validationSchemas';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { OPERATORS, PAYMENT_METHODS, QUICK_AMOUNTS } from '../utils/constants';

function Recharge() {
  const { state, dispatch } = useApp();
  const { showNotification } = useNotification();
  const [selectedOperator, setSelectedOperator] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(rechargeSchema),
    defaultValues: {
      paymentMethod: 'wallet'
    }
  });

  const watchedAmount = watch('amount');
  const watchedOperator = watch('operator');

  const onSubmit = async (data) => {
    try {
      if (data.amount > state.balance) {
        showNotification('Insufficient balance. Please add money to your wallet.', 'error');
        return;
      }

      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const transaction = {
        id: Date.now(),
        phoneNumber: data.phoneNumber,
        operator: data.operator,
        amount: parseInt(data.amount),
        paymentMethod: data.paymentMethod,
        status: 'success',
        timestamp: new Date().toISOString(),
        transactionId: `TXN${Date.now()}`
      };
      
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
      showNotification(`Recharge of ₹${data.amount} successful for ${data.phoneNumber}!`, 'success');
      
      reset();
      setSelectedOperator(null);
    } catch (error) {
      showNotification('Recharge failed. Please try again.', 'error');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleQuickAmount = (amount) => {
    setValue('amount', amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mobile Recharge
          </h1>
          <p className="text-xl text-gray-600">
            Quick, secure, and instant mobile recharge
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Mobile Number"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  register={register('phoneNumber')}
                  error={errors.phoneNumber?.message}
                  maxLength="10"
                />

                {/* Operator Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Operator
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {OPERATORS.map(operator => (
                      <div
                        key={operator.id}
                        onClick={() => {
                          setValue('operator', operator.code);
                          setSelectedOperator(operator);
                        }}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          watchedOperator === operator.code
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{operator.logo}</div>
                          <div className="text-sm font-medium">{operator.name}</div>
                          <div className="text-xs text-gray-500">{operator.commission}% cashback</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.operator && (
                    <p className="mt-1 text-sm text-red-600">{errors.operator.message}</p>
                  )}
                </div>

                <Input
                  label="Recharge Amount"
                  type="number"
                  placeholder="Enter amount (₹10 - ₹5000)"
                  register={register('amount')}
                  error={errors.amount?.message}
                  min="10"
                  max="5000"
                />

                {/* Quick Amount Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quick Amounts
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {QUICK_AMOUNTS.map(amount => (
                      <Button
                        key={amount}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAmount(amount)}
                        className={watchedAmount == amount ? 'bg-primary-500 text-white' : ''}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {PAYMENT_METHODS.map(method => (
                      <label
                        key={method.id}
                        className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          watch('paymentMethod') === method.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          {...register('paymentMethod')}
                          type="radio"
                          value={method.id}
                          className="sr-only"
                        />
                        <span className="text-xl mr-3">{method.icon}</span>
                        <span className="font-medium">{method.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full"
                  size="lg"
                  disabled={!state.isLoggedIn}
                >
                  {!state.isLoggedIn ? 'Please Login to Recharge' : 'Recharge Now'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Balance Card */}
            {state.isLoggedIn && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-3">Wallet Balance</h3>
                <div className="text-3xl font-bold text-secondary-500 mb-2">
                  ₹{state.balance}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Add Money
                </Button>
              </Card>
            )}

            {/* Recharge Summary */}
            {watchedAmount && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-3">Recharge Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>₹{watchedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>₹0</span>
                  </div>
                  {selectedOperator && (
                    <div className="flex justify-between text-green-600">
                      <span>Cashback ({selectedOperator.commission}%):</span>
                      <span>₹{Math.round(watchedAmount * selectedOperator.commission / 100)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>₹{watchedAmount}</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Recent Transactions */}
            {state.transactions.length > 0 && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-3">Recent Transactions</h3>
                <div className="space-y-3">
                  {state.transactions.slice(0, 3).map(transaction => (
                    <div key={transaction.id} className="flex justify-between items-center text-sm">
                      <div>
                        <div className="font-medium">{transaction.phoneNumber}</div>
                        <div className="text-gray-500">{transaction.operator}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{transaction.amount}</div>
                        <div className="text-green-500 text-xs">{transaction.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Loading Overlay */}
        {state.loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="text-center">
              <Loader size="lg" text="Processing your recharge..." />
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recharge;