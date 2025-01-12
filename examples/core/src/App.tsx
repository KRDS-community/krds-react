import { useState } from 'react';
import './App.css';
import {
  Heading,
  Display,
  Title,
  Body,
  Detail,
  Label,
  Link,
  Select,
  RadioButtonGroup,
  Calendar,
} from '@krds-ui/core';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
};

function App() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
  ];
  const [selectedValue, setSelectedValue] = useState('on');
  return (
    <>
      <LanguageSelector />
      <Calendar mode="single" onSelect={(date) => console.log(date)} />
      <Select options={options} placeholder="Select an option!" size="sm" />
      <div>
        <RadioButtonGroup
          name="test-radio"
          options={[
            { value: 'on', label: 'On' },
            { value: 'off', label: 'Off' },
            { value: 'intermediate', label: 'Intermediate' },
          ]}
          selectedValue={selectedValue}
          onChange={(value) => {
            console.log(`Switched to ${value}`);
            setSelectedValue(value);
          }}
        />
      </div>
      <div>
        <Display size="l">Display Large</Display>
      </div>
      <div>
        <Display size="m">Display Medium</Display>
      </div>
      <div>
        <Display size="s" color="primary">
          Display Small
        </Display>
      </div>
      <div>
        <Heading size="l" color="danger">
          Heading Large
        </Heading>
      </div>
      <div>
        <Heading size="m">Heading Medium</Heading>
      </div>
      <div>
        <Heading size="s">Heading Small</Heading>
      </div>
      <div>
        <Title size="xxl" color="warning-10">
          Title XXL
        </Title>
      </div>
      <div>
        <Title size="xl">Title XL</Title>
      </div>
      <div>
        <Title size="l">Title L</Title>
      </div>
      <div>
        <Title size="m" color="warning-30">
          Title M
        </Title>
      </div>
      <div>
        <Title size="s">Title S</Title>
      </div>
      <div>
        <Title size="xs">Title XS</Title>
      </div>
      <div>
        <Body size="l" weight="bold" color="primary-70">
          Body Large Bold
        </Body>
      </div>
      <div>
        <Body size="m" weight="bold">
          Body Medium Bold
        </Body>
      </div>
      <div>
        <Body size="s" weight="bold">
          Body Small Bold
        </Body>
      </div>
      <div>
        <Body size="l">Body Large Regular</Body>
      </div>
      <div>
        <Body size="m" color="success-70">
          Body Medium Regular
        </Body>
      </div>
      <div>
        <Body size="s">Body Small Regular</Body>
      </div>
      <div>
        <Detail size="l" weight="bold">
          Detail Large Bold
        </Detail>
      </div>
      <div>
        <Detail size="m" weight="bold">
          Detail Medium Bold
        </Detail>
      </div>
      <div>
        <Detail size="s" weight="bold">
          Detail Small Bold
        </Detail>
      </div>
      <div>
        <Detail size="l">Detail Large Regular</Detail>
      </div>
      <div>
        <Detail size="m" color="secondary-40">
          Detail Medium Regular
        </Detail>
      </div>
      <div>
        <Detail size="s">Detail Small Regular</Detail>
      </div>
      <div>
        <Label size="l" weight="bold">
          Label Large Bold
        </Label>
      </div>
      <div>
        <Label size="m" weight="bold">
          Label Medium Bold
        </Label>
      </div>
      <div>
        <Label size="s" weight="bold" color="gray-30">
          Label Small Bold
        </Label>
      </div>
      <div>
        <Label size="xs" weight="bold">
          Label XS Bold
        </Label>
      </div>
      <div>
        <Label size="l">Label Large Regular</Label>
      </div>
      <div>
        <Label size="m" color="point-60">
          Label Medium Regular
        </Label>
      </div>
      <div>
        <Label size="s">Label Small Regular</Label>
      </div>
      <div>
        <Label size="xs">Label XS Regular</Label>
      </div>
      <div>
        <Link size="l" weight="bold">
          Link Large Bold
        </Link>
      </div>
      <div>
        <Link size="m" weight="bold">
          Link Medium Bold
        </Link>
      </div>
      <div>
        <Link size="s" weight="bold" color="danger-90">
          Link Small Bold
        </Link>
      </div>
      <div>
        <Link size="l">Link Large Regular</Link>
      </div>
      <div>
        <Link size="m">Link Medium Regular</Link>
      </div>
      <div>
        <Link size="s" color="info-60">
          Link Small Regular
        </Link>
      </div>
    </>
  );
}

export default App;
