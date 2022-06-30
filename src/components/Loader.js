import React from 'react';
const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
  <div className="inline-block w-12 h-12 border-4 rounded-full spinner-border animate-spin" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    );
};

export default Loader;