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

### Setup

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

### Typography

KRDS Design System의 타이포그래피 시스템 사용법입니다.

```tsx
// Display
<h1 className="text-display-l">Display L</h1>  // 66px
<h1 className="text-display-m">Display M</h1>  // 50px
<h1 className="text-display-s">Display S</h1>  // 40px

// Heading
<h2 className="text-heading-l">Heading L</h2>  // 50px
<h2 className="text-heading-m">Heading M</h2>  // 40px
<h2 className="text-heading-s">Heading S</h2>  // 32px

// Body
<p className="text-body-l">Body L</p>  // 19px
<p className="text-body-m">Body M</p>  // 17px
<p className="text-body-s">Body S</p>  // 15px

// Mobile 대응
<h1 className="text-display-l-mobile">Display L Mobile</h1>  // 40px
<p className="text-body-l-mobile">Body L Mobile</p>  // 19px
```

### Color

브랜드 컬러 시스템을 제공합니다. 각 색상은 0부터 100까지의 단계를 가지고 있습니다.

```tsx
// Primary Colors
<div className="bg-primary">Primary Default (#246BEB)</div>
<div className="bg-primary-50">Primary 50</div>
<div className="text-primary-30">Primary 30</div>

// Secondary Colors
<div className="bg-secondary">Secondary Default (#003675)</div>
<div className="bg-secondary-50">Secondary 50</div>

// Gray Scale
<div className="bg-gray-50">Gray 50</div>
<div className="text-gray-30">Gray 30</div>

// Point Colors
<div className="bg-point">Point Default (#E71825)</div>
<div className="bg-danger">Danger Default (#EB003B)</div>
<div className="bg-warning">Warning Default (#FFB724)</div>
<div className="bg-success">Success Default (#008A1E)</div>
```

### Breakpoints

반응형 디자인을 위한 브레이크포인트를 제공합니다.

```tsx
// 브레이크포인트 기준
mobile: 360px ~ 600px
tablet: 601px ~ 1024px
desktop: 1025px ~

// 사용 예시
<div className="w-full mobile:w-1/2 tablet:w-1/3 desktop:w-1/4">
  반응형 너비 조절
</div>

<div className="hidden tablet:block">
  태블릿 이상에서만 표시
</div>
```

## 포함된 테마

- Typography 스타일 (텍스트 크기, 행간, 글자 간격)
- Color
- Breakpoints
