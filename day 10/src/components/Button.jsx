import React from 'react';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  className = '',
  ...props 
}) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <div className="loader mr-2 h-4 w-4"></div>}
      {children}
    </button>
  );
}

export default Button;