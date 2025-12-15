import React from 'react';

function Input({ 
  label, 
  error, 
  className = '', 
  register = () => {}, 
  ...props 
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
        {...register}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export default Input;