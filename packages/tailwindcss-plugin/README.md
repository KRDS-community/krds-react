# KRDS Tailwindcss Plugin

KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 React 컴포넌트 라이브러리입니다. 자세한 가이드 내용은 [이곳](https://uiux.egovframe.go.kr/guide/index.html)에서 확인할 수 있습니다.

## 특징

- 대한민국 정부 디지털 서비스 UI/UX 가이드라인 준수
- React와 tailwindcss 기반의 재사용 가능한 UI 컴포넌트 제공
- TypeScript 지원
- 각 컴포넌트별 라이브러리 배포를 통해 필요한 컴포넌트만 사용 가능

## 설치

```bash
npm install @krds-ui/tailwindcss-plugin
```

```bash
yarn add @krds-ui/tailwindcss-plugin
```

```bash
pnpm add @krds-ui/tailwindcss-plugin
```

## 사용법

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import krdsPlugin from '@krds-ui/tailwindcss-plugin';

export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [krdsPlugin],
};
```

## 포함된 테마

- Typography 스타일 (텍스트 크기, 행간, 글자 간격)
- Color
