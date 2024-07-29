# KRDS-React

KRDS-React는 한국 정부 디지털 서비스 디자인 시스템을 기반으로 한 React 컴포넌트 라이브러리입니다.

## 특징

- 한국 정부 디지털 서비스 디자인 가이드라인 준수
- React 기반의 재사용 가능한 UI 컴포넌트
- TypeScript 지원

## 설치

```bash
npm install krds-react
```

또는

```bash
pnpm add krds-react
```

## 사용 방법

```jsx
import { Button } from 'krds-react'

function App() {
  return (
    <Typography variant="display" size="large">
      KRDS React
    </Typography>
  )
}
```

### 설치

1. 저장소를 클론합니다:

```bash
git clone https://github.com/hismethod/krds-react.git
cd krds-react
```

2. 의존성을 설치합니다:

```bash
pnpm install
```

### 스크립트

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션용 빌드 생성

## 기술 스택

- React
- TypeScript
- Vite
