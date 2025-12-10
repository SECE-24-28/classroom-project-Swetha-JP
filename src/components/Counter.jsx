import React, { useState } from "react";

function Counter({ username }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 m-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Counter App</h1>
      <h2 className="text-xl text-gray-700 text-center mb-6">Welcome, {username}!</h2>
      <div className="text-center">
        <h3 className="text-6xl font-bold text-gray-800 mb-8">{count}</h3>
        <div className="space-x-4">
          <button 
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Increment
          </button>
          <button 
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
