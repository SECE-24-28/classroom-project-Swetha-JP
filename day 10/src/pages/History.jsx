import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';

function History() {
  const { state } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredTransactions = state.transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return '✅';
      case 'failed': return '❌';
      case 'pending': return '⏳';
      default: return '📱';
    }
  };

  if (!state.isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="text-center max-w-md">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">
            Please login to view your transaction history.
          </p>
          <Button className="w-full">
            Login to Continue
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transaction History
          </h1>
          <p className="text-xl text-gray-600">
            Track all your recharge transactions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {state.transactions.length}
            </div>
            <div className="text-gray-600">Total Recharges</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-secondary-500 mb-2">
              ₹{state.transactions.reduce((sum, t) => sum + t.amount, 0)}
            </div>
            <div className="text-gray-600">Total Spent</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-accent-500 mb-2">
              ₹{state.balance}
            </div>
            <div className="text-gray-600">Current Balance</div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-wrap gap-2">
            <span className="font-medium text-gray-700 mr-4">Filter by status:</span>
            {['all', 'success', 'pending', 'failed'].map(status => (
              <Button
                key={status}
                variant={filter === status ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
        </Card>

        {/* Transactions List */}
        {filteredTransactions.length === 0 ? (
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {state.transactions.length === 0 ? 'No Transactions Yet' : 'No Matching Transactions'}
            </h3>
            <p className="text-gray-600 mb-6">
              {state.transactions.length === 0 
                ? 'Start your first recharge to see transaction history here.'
                : 'Try adjusting your filter to see more transactions.'
              }
            </p>
            {state.transactions.length === 0 && (
              <Button>
                Start Recharge
              </Button>
            )}
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredTransactions.map(transaction => (
              <Card key={transaction.id} hover className="animate-slide-up">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="text-2xl">
                      {getStatusIcon(transaction.status)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {transaction.phoneNumber}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                          {transaction.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span>Operator: <span className="font-medium">{transaction.operator}</span></span>
                          <span>Payment: <span className="font-medium">{transaction.paymentMethod}</span></span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span>Transaction ID: <span className="font-mono text-xs">{transaction.transactionId}</span></span>
                          <span>Date: <span className="font-medium">{new Date(transaction.timestamp).toLocaleDateString()}</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      ₹{transaction.amount}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Load More Button (if needed) */}
        {filteredTransactions.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">
              Load More Transactions
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;