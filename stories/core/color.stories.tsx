import React from 'react';
import { colors } from '../../packages/core/lib'; // Assuming the colors object is exported from a separate file

const ColorSwatch = ({ colorName, colorValue }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
    <div
      style={{
        width: '32px',
        height: '32px',
        marginRight: '8px',
        borderRadius: '4px',
        backgroundColor: colorValue,
      }}
    />
    <span style={{ fontSize: '14px' }}>{`${colorName}:   `}</span>
    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{colorValue}</span>
  </div>
);

const ColorPaletteSection = ({ title, colors }) => (
  <div style={{ marginBottom: '32px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
      {title}
    </h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      {Object.entries(colors).map(([name, value]) => (
        <ColorSwatch key={name} colorName={name} colorValue={value} />
      ))}
    </div>
  </div>
);

const ColorPalette = () => {
  const colorSections = {
    Primary: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('primary')),
    ),
    Secondary: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('secondary')),
    ),
    Gray: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('gray')),
    ),
    Point: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('point')),
    ),
    Danger: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('danger')),
    ),
    Warning: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('warning')),
    ),
    Success: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('success')),
    ),
    Info: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('info')),
    ),
    Navy: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('navy')),
    ),
    Blue: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('blue')),
    ),
    RoyalBlue: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('royalBlue')),
    ),
    SkyBlue: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('skyBlue')),
    ),
    Aqua: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('aqua')),
    ),
    Teal: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('teal')),
    ),
    Green: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('green')),
    ),
    LimeGreen: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('limeGreen')),
    ),
    Lime: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('lime')),
    ),
    Olive: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('olive')),
    ),
    Yellow: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('yellow')),
    ),
    Gold: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('gold')),
    ),
    Orange: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('orange')),
    ),
    Red: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('red')),
    ),
    Pink: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('pink')),
    ),
    HotPink: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('hotPink')),
    ),
    Purple: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('purple')),
    ),
    BlueViolet: Object.fromEntries(
      Object.entries(colors).filter(([key]) => key.startsWith('blueViolet')),
    ),
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}
      >
        Color Palette
      </h1>
      {Object.entries(colorSections).map(([title, sectionColors]) => (
        <ColorPaletteSection key={title} title={title} colors={sectionColors} />
      ))}
    </div>
  );
};

export default {
  title: 'Design System/Color Palette',
  component: ColorPalette,
};

export const Default = () => <ColorPalette />;
