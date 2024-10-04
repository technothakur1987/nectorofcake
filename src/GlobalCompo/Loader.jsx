import React from 'react';

const Loader = ({ color }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`w-16 h-16 border-4 border-t-transparent ${color} rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loader;
