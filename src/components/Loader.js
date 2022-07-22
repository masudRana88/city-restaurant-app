import React from 'react';
const Loader = ({big}) => {
  
    return (
        <div className="flex items-center justify-center space-x-2">
          <div className='h-20 border-4 rounded-full inline-bloc spinner-border animate-spinw-20'role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    );
};

export default Loader;