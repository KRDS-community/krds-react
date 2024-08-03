# KRDS-React

KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 React 컴포넌트 라이브러리입니다. 자세한 가이드 내용은 [이곳](https://uiux.egovframe.go.kr/guide/index.html)에서 확인할 수 있습니다.

## 특징

- 대한민국 정부 디지털 서비스 UI/UX 가이드라인 준수
- React와 tailwindcss 기반의 재사용 가능한 UI 컴포넌트 제공
- TypeScript 지원
- 각 컴포넌트별 라이브러리 배포를 통해 필요한 컴포넌트만 사용 가능

## 설치

아래 각 개별 패키지 문서를 참조하시기 바랍니다.

## 컴포넌트 목록

- [Core](./packages/core/README.md): Typography, Color 등의 기본 컴포넌트들을 제공합니다.

## Contribution

Issue 및 Pull Request는 언제든 환영합니다.

### 개발

1. 저장소를 clone 합니다:

```bash
git clone https://github.com/hismethod/krds-react.git
cd krds-react
```

2. 의존성을 설치합니다:

```bash
pnpm install
```

### 빌드

- `pnpm build`: 프로덕션용 빌드 생성

### 기술 스택

- React
- TypeScript
- Vite
- tailwindcss

## StoryBook

```bash
pnpm storybook
```

http://localhost:6006 에서 확인할 수 있습니다.

## 라이센스

Apache-2.0 라이센스를 따릅니다.
