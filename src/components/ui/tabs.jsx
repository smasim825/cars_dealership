import React, { createContext, useContext, useState } from 'react';
import './tabs.css';

const TabsContext = createContext(null);

export function Tabs({ value, onValueChange, defaultValue, className = '', children, ...props }) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue);

  const currentTab = value !== undefined ? value : selectedTab;

  const handleTabChange = (val) => {
    if (value === undefined) {
      setSelectedTab(val);
    }
    if (onValueChange) {
      onValueChange(val);
    }
  };

  return (
    <TabsContext.Provider value={{ value: currentTab, onValueChange: handleTabChange }}>
      <div className={`shadcn-tabs-root ${className}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = '', children, ...props }) {
  return (
    <div className={`shadcn-tabs-list ${className}`} role="tablist" {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = '', children, onClick, ...props }) {
  const context = useContext(TabsContext);
  const isActive = context?.value === value;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (context?.onValueChange) {
      context.onValueChange(value);
    }
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      className={`shadcn-tabs-trigger ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = '', children, ...props }) {
  const context = useContext(TabsContext);
  if (context?.value !== value) return null;

  return (
    <div
      role="tabpanel"
      data-state={context?.value === value ? 'active' : 'inactive'}
      className={`shadcn-tabs-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
