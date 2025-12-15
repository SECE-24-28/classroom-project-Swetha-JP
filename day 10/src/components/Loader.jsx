import React from 'react';

function Loader({ size = 'md', text = '' }) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`loader ${sizes[size]}`}></div>
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );
}

export default Loader;