import React, { useState } from 'react';
import { Label } from './Label';

interface TabProps {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tab: React.FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
  id: string;
  panelId: string;
  disabled?: boolean;
}> = ({ label, isSelected, onClick, id, panelId, disabled }) => {
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={panelId}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary-50 transition-all duration-400 ease-in-out'
        ${
          isSelected
            ? 'border-b-4 border-primary rounded-t-2'
            : 'border-b-4 border-transparent rounded-t-2'
        } ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:bg-secondary-5'
      }`}
    >
      <Label
        color={isSelected ? 'primary' : 'gray-50'}
        className={
          disabled
            ? 'cursor-not-allowed'
            : isSelected
            ? 'cursor-pointer'
            : 'cursor-pointer hover:text-gray-70'
        }
        size="l"
        weight="bold"
      >
        {label}
      </Label>
      {isSelected && <span className="sr-only">선택됨</span>}
    </button>
  );
};

const TabPanel: React.FC<{
  children: React.ReactNode;
  id: string;
  tabId: string;
  isSelected: boolean;
}> = ({ children, id, tabId, isSelected }) => {
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
      className={`${isSelected ? '' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Tab Navigation"
        className="flex border-b border-gray-20"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isSelected={index === selectedTab}
            onClick={() => setSelectedTab(index)}
            id={`tab-${index}`}
            panelId={`panel-${index}`}
            disabled={tab.disabled}
          />
        ))}
      </div>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          id={`panel-${index}`}
          tabId={`tab-${index}`}
          isSelected={index === selectedTab}
        >
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};
