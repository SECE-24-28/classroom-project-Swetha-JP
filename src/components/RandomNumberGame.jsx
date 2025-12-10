import React, { useState } from 'react';

function RandomNumberGame() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
    setMessage('Number generated! Try to guess it (1-100)');
    setUserGuess('');
    setAttempts(0);
  };

  const checkGuess = () => {
    const guess = parseInt(userGuess);
    setAttempts(attempts + 1);

    if (guess === randomNumber) {
      setMessage(`🎉 Correct! You won in ${attempts + 1} attempts!`);
      setScore(score + 1);
    } else if (guess < randomNumber) {
      setMessage('📈 Too low! Try higher');
    } else {
      setMessage('📉 Too high! Try lower');
    }
  };

  const resetGame = () => {
    setRandomNumber(null);
    setUserGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-blue-400 rounded-xl shadow-xl p-8 m-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">🎲 Random Number Game</h2>
      
      <div className="text-center mb-6">
        <p className="text-gray-700">
          <span className="font-semibold">Score:</span> <span className="text-green-600 font-bold">{score}</span> | 
          <span className="font-semibold"> Attempts:</span> <span className="text-orange-600 font-bold">{attempts}</span>
        </p>
      </div>

      {!randomNumber ? (
        <div className="text-center">
          <button 
            onClick={generateRandomNumber}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-200 transform hover:scale-105"
          >
            🚀 Start New Game
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter guess (1-100)"
            min="1"
            max="100"
            className="w-48 px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <div className="space-x-3">
            <button
              onClick={checkGuess}
              disabled={!userGuess}
              className={`px-6 py-3 font-semibold rounded-lg transition duration-200 ${
                userGuess 
                  ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer transform hover:scale-105' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
            >
              🎯 Guess
            </button>
            <button
              onClick={resetGame}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 transform hover:scale-105"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg text-center">
          <p className="text-lg font-bold text-cyan-800">{message}</p>
        </div>
      )}
    </div>
  );
}

export default RandomNumberGame;