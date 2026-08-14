import React from 'react';
import './button.css';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) {
  return (
    <button className={`shadcn-btn btn-${variant} btn-size-${size} ${className}`} {...props}>
      {children}
    </button>
  );
}
