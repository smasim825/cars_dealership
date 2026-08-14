import React from 'react';
import './badge.css';

export function Badge({ children, variant = 'default', className = '', ...props }) {
  return (
    <span className={`shadcn-badge badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  );
}
