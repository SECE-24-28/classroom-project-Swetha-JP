import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './components/AppContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RechargeForm from './components/RechargeForm';
import TransactionCard from './components/TransactionCard';
import OperatorCard from './components/OperatorCard';
import NotificationPanel from './components/NotificationPanel';

// Mock data
const mockOperators = [
  { id: 1, name: 'Airtel', network: '4G/5G', commission: 2, isPopular: true },
  { id: 2, name: 'Jio', network: '4G/5G', commission: 1.5, isPopular: true },
  { id: 3, name: 'Vi', network: '4G', commission: 2.5, isPopular: false },
  { id: 4, name: 'BSNL', network: '4G', commission: 3, isPopular: false }
];

function AppContent() {
  const { state, dispatch } = useApp();
  const [activeTab, setActiveTab] = useState('recharge');
  const [selectedOperator, setSelectedOperator] = useState(null);

  useEffect(() => {
    // Set mock user on app load
    dispatch({
      type: 'SET_USER',
      payload: { name: 'John Doe', email: 'john@example.com' }
    });
  }, [dispatch]);

  const handleRecharge = (transaction) => {
    console.log('Recharge completed:', transaction);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'recharge':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <RechargeForm 
              operators={mockOperators} 
              onRecharge={handleRecharge}
            />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Amounts</h3>
              <div className="grid grid-cols-3 gap-2">
                {[99, 199, 299, 399, 499, 599].map(amount => (
                  <button
                    key={amount}
                    className="p-3 border rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Transaction History</h2>
            {state.transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No transactions yet
              </div>
            ) : (
              <div className="space-y-3">
                {state.transactions.map(transaction => (
                  <TransactionCard 
                    key={transaction.id} 
                    transaction={transaction} 
                    showDetails={true}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case 'operators':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select Operator</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mockOperators.map(operator => (
                <OperatorCard
                  key={operator.id}
                  operator={operator}
                  isSelected={selectedOperator?.id === operator.id}
                  onSelect={setSelectedOperator}
                />
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Profile</h2>
            <div className={`p-6 rounded-lg ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {state.user?.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{state.user?.name}</h3>
                  <p className="text-gray-600">{state.user?.email}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">₹{state.balance}</div>
                  <div className="text-sm text-gray-600">Wallet Balance</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">{state.transactions.length}</div>
                  <div className="text-sm text-gray-600">Total Recharges</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">₹{state.transactions.reduce((sum, t) => sum + parseInt(t.amount), 0)}</div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className={`min-h-screen ${state.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="flex justify-between items-center p-4">
        <Header title="Mobile Recharge App" />
        <NotificationPanel />
      </div>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-6xl mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;