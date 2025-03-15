import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '../../packages/icon/lib';

interface IconDisplayProps {
  size?: number;
}

/**
 * Icon Gallery displays all icons from the icon library
 */
export const Default: React.FC<IconDisplayProps> = ({ size = 24 }) => {
  // Filter to get only the icon components (those ending with 'Icon')
  const iconComponents = Object.entries(Icons).filter(([name]) =>
    name.endsWith('Icon'),
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      {iconComponents.map(([name, Icon]: [string, any]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '130px',
            height: '90px',
            padding: '10px',
            border: '1px solid #eee',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            gap: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onClick={() => {
            // Copy the component name to clipboard
            navigator.clipboard.writeText(name);
            // Show a small notification
            const notification = document.createElement('div');
            notification.textContent = `${name} copied!`;
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.padding = '10px 20px';
            notification.style.backgroundColor = '#333';
            notification.style.color = 'white';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '9999';
            document.body.appendChild(notification);
            setTimeout(() => {
              document.body.removeChild(notification);
            }, 2000);
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
          }}
        >
          <Icon width={size} height={size} />
          <div
            style={{
              textAlign: 'center',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {name.replace('Icon', '')}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof Default> = {
  title: 'Icons',
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: 'Size of the icons',
      defaultValue: 24,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Default>;
