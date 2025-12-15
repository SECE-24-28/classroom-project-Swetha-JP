import React, { useState } from 'react';

function OperatorCard({ operator, onSelect, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'border-primary bg-blue-50' 
          : isHovered 
            ? 'border-gray-300 shadow-md' 
            : 'border-gray-200'
      }`}
      onClick={() => onSelect(operator)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
          {operator.name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{operator.name}</h3>
          <p className="text-sm text-gray-600">{operator.network}</p>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xs bg-secondary text-white px-2 py-1 rounded">
              {operator.commission}% cashback
            </span>
            {operator.isPopular && (
              <span className="text-xs bg-accent text-white px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatorCard;