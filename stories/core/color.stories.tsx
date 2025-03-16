import React, { useState } from 'react';
import { colors } from '../../packages/core/lib';

const ColorSwatch = ({ colorName, colorValue, mode }) => {
  // Extract numeric part from colorName (e.g., "primary-50" -> 50)
  const numberMatch = colorName.match(/-(\d+)/);
  const colorNumber = numberMatch ? parseInt(numberMatch[1]) : 0;

  return (
    <div
      style={{
        width: '100%',
        height: '40px',
        backgroundColor: colorValue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        color: colorNumber > 50 ? 'white' : 'black',
        fontSize: '14px',
      }}
    >
      <span>{colorName}</span>
      <span>{colorValue.toUpperCase()}</span>
    </div>
  );
};

const ColorGroup = ({ title, colorEntries, mode }) => (
  <div
    style={{
      width: 'calc(16.666% - 10px)',
      margin: '5px',
      backgroundColor: mode === 'high-contrast' ? '#000000' : '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    <div
      style={{
        padding: '10px',
        fontWeight: 'bold',
        color: mode === 'high-contrast' ? '#ffffff' : '#000000',
      }}
    >
      {title}
    </div>
    {colorEntries.map(([name, key]) => (
      <ColorSwatch
        key={name}
        colorName={name}
        colorValue={colors[key][mode]}
        mode={mode}
      />
    ))}
  </div>
);

const ColorPalette = () => {
  const [mode, setMode] = useState('light');

  // Set background color based on mode
  const backgroundColor = mode === 'high-contrast' ? '#000000' : '#f5f5f5';
  const headerColor = mode === 'high-contrast' ? '#ffffff' : '#000000';

  // Define color groups mapping
  const colorGroups = {
    Primary: [
      ['primary-5', 'primary-5'],
      ['primary-10', 'primary-10'],
      ['primary-20', 'primary-20'],
      ['primary-30', 'primary-30'],
      ['primary-40', 'primary-40'],
      ['primary-50', 'primary-50'],
      ['primary-60', 'primary-60'],
      ['primary-70', 'primary-70'],
      ['primary-80', 'primary-80'],
      ['primary-90', 'primary-90'],
      ['primary-95', 'primary-95'],
    ],
    Secondary: [
      ['secondary-5', 'secondary-5'],
      ['secondary-10', 'secondary-10'],
      ['secondary-20', 'secondary-20'],
      ['secondary-30', 'secondary-30'],
      ['secondary-40', 'secondary-40'],
      ['secondary-50', 'secondary-50'],
      ['secondary-60', 'secondary-60'],
      ['secondary-70', 'secondary-70'],
      ['secondary-80', 'secondary-80'],
      ['secondary-90', 'secondary-90'],
      ['secondary-95', 'secondary-95'],
    ],
    Gray: [
      ['gray-0', 'gray-0'],
      ['gray-5', 'gray-5'],
      ['gray-10', 'gray-10'],
      ['gray-20', 'gray-20'],
      ['gray-30', 'gray-30'],
      ['gray-40', 'gray-40'],
      ['gray-50', 'gray-50'],
      ['gray-60', 'gray-60'],
      ['gray-70', 'gray-70'],
      ['gray-80', 'gray-80'],
      ['gray-90', 'gray-90'],
      ['gray-95', 'gray-95'],
      ['gray-100', 'gray-100'],
    ],
    Alpha: [
      ['alpha-black100', 'alpha-black100'],
      ['alpha-black75', 'alpha-black75'],
      ['alpha-black50', 'alpha-black50'],
      ['alpha-black25', 'alpha-black25'],
      ['alpha-black10', 'alpha-black10'],
      ['alpha-black0', 'alpha-black0'],
      ['alpha-white100', 'alpha-white100'],
      ['alpha-white75', 'alpha-white75'],
      ['alpha-white50', 'alpha-white50'],
      ['alpha-white25', 'alpha-white25'],
      ['alpha-white10', 'alpha-white10'],
      ['alpha-white0', 'alpha-white0'],
    ],
    Danger: [
      ['danger-5', 'danger-5'],
      ['danger-10', 'danger-10'],
      ['danger-20', 'danger-20'],
      ['danger-30', 'danger-30'],
      ['danger-40', 'danger-40'],
      ['danger-50', 'danger-50'],
      ['danger-60', 'danger-60'],
      ['danger-70', 'danger-70'],
      ['danger-80', 'danger-80'],
      ['danger-90', 'danger-90'],
      ['danger-95', 'danger-95'],
    ],
    Information: [
      ['information-5', 'information-5'],
      ['information-10', 'information-10'],
      ['information-20', 'information-20'],
      ['information-30', 'information-30'],
      ['information-40', 'information-40'],
      ['information-50', 'information-50'],
      ['information-60', 'information-60'],
      ['information-70', 'information-70'],
      ['information-80', 'information-80'],
      ['information-90', 'information-90'],
      ['information-95', 'information-95'],
    ],
    Warning: [
      ['warning-5', 'warning-5'],
      ['warning-10', 'warning-10'],
      ['warning-20', 'warning-20'],
      ['warning-30', 'warning-30'],
      ['warning-40', 'warning-40'],
      ['warning-50', 'warning-50'],
      ['warning-60', 'warning-60'],
      ['warning-70', 'warning-70'],
      ['warning-80', 'warning-80'],
      ['warning-90', 'warning-90'],
      ['warning-95', 'warning-95'],
    ],
    Success: [
      ['success-5', 'success-5'],
      ['success-10', 'success-10'],
      ['success-20', 'success-20'],
      ['success-30', 'success-30'],
      ['success-40', 'success-40'],
      ['success-50', 'success-50'],
      ['success-60', 'success-60'],
      ['success-70', 'success-70'],
      ['success-80', 'success-80'],
      ['success-90', 'success-90'],
      ['success-95', 'success-95'],
    ],
    Point: [
      ['point-5', 'point-5'],
      ['point-10', 'point-10'],
      ['point-20', 'point-20'],
      ['point-30', 'point-30'],
      ['point-40', 'point-40'],
      ['point-50', 'point-50'],
      ['point-60', 'point-60'],
      ['point-70', 'point-70'],
      ['point-80', 'point-80'],
      ['point-90', 'point-90'],
      ['point-95', 'point-95'],
    ],
    Graphic: [
      ['graphic-10', 'graphic-10'],
      ['graphic-30', 'graphic-30'],
      ['graphic-50', 'graphic-50'],
      ['graphic-70', 'graphic-70'],
      ['graphic-90', 'graphic-90'],
    ],
  };

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: backgroundColor,
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: 0,
            color: headerColor,
          }}
        >
          Color Palette
        </h1>
        <div>
          <label style={{ marginRight: '10px', color: headerColor }}>
            Theme Mode:{' '}
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            <option value="light">Light</option>
            <option value="high-contrast">High Contrast</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-5px' }}>
        {Object.entries(colorGroups).map(([title, groupColors]) => (
          <ColorGroup
            key={title}
            title={title}
            colorEntries={groupColors}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Color Palette',
  component: ColorPalette,
};

export const Default = () => <ColorPalette />;
