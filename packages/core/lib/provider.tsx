import React, { useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'high-contrast' | 'system';

export type PrimitiveToken = {};

export type SemanticToken = {};

export type ComponentToken = {};

export type Locale = 'ko' | 'en';

export type TextSize = 'small' | 'medium' | 'large';

export type DesignToken = {
  primitive: PrimitiveToken;
  semantic: SemanticToken;
  component: ComponentToken;
};

export type DesignTokenProps = {
  primitive?: Partial<PrimitiveToken>;
  semantic?: Partial<SemanticToken>;
  component?: Partial<ComponentToken>;
};

export type ContextProps = {
  token: DesignToken;
  mode: ThemeMode;
  locale: Locale;
  textSize: TextSize;

  setThemeMode: (mode: ThemeMode) => void;
  setLocale: (locale: Locale) => void;
  setTextSize: (textSize: TextSize) => void;
};

export const Context = React.createContext<ContextProps>({} as ContextProps);

export const ContextProvider: React.FC<{
  token: DesignTokenProps;
  children: React.ReactNode;
}> = ({ token, children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [locale, setLocale] = useState<Locale>('ko');
  const [textSize, setTextSize] = useState<TextSize>('medium');

  const context: ContextProps = {
    token: { ...token },
    mode: themeMode,
    locale: locale,
    textSize: textSize,
    setThemeMode: (mode) => setThemeMode(mode),
    setLocale: (locale) => setLocale(locale),
    setTextSize: (textSize) => setTextSize(textSize),
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useContext = () => {
  return React.useContext(Context);
};

export default ContextProvider;
