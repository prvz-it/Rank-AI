import React from 'react';

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-1 ${className}`}>
        {children}
    </div>
  )
}

export default Container;