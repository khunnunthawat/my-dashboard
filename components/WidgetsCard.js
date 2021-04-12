import React from 'react';

const WidgetsCard = ({ children }) => {
  return (
    <div className='md:row-start-1 pb-4'>
      {children}
    </div>
  );
};


export default WidgetsCard;