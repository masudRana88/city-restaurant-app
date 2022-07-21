import React from 'react';
const Loader = ({big}) => {
  
    return (
        <div className="flex items-center justify-center space-x-2">
          <div className={`inline-bloc border-4 rounded-full spinner-border animate-spin ${big ? 'w-20 h-20': 'w-14 h-14'} `} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    );
};

export default Loader;