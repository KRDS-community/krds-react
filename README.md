# KRDS-React

KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 React 컴포넌트 라이브러리입니다. 이 라이브러리는 정부 디지털 서비스의 일관성 있는 사용자 경험을 제공하기 위해 설계되었습니다.

자세한 가이드 내용은 [이곳](https://uiux.egovframe.go.kr/guide/index.html)에서 확인할 수 있습니다.

## 특징

- 대한민국 정부 디지털 서비스 UI/UX 가이드라인 준수
- React와 tailwindcss 기반의 재사용 가능한 UI 컴포넌트 제공
- TypeScript 지원
- 각 컴포넌트별 라이브러리 배포를 통해 필요한 컴포넌트만 사용 가능

## 설치

아래 각 개별 패키지 문서를 참조하시기 바랍니다.

## 컴포넌트 목록

- [Core](./packages/core/README.md): Typography, Color 등의 기본 컴포넌트들을 제공합니다.
- [TailwindCSS Plugin](./packages/tailwindcss-plugin/README.md): KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인을 준수하기 위해 TailwindCSS를 활용합니다. 일관성 있는 TailwindCSS 테마를 제공하는 플러그인입니다.

## Figma Design

- [범 정부 UI/UX 공통 가이드]표준 프로토타입: https://www.figma.com/community/file/1445014442755058829
- [범 정부 UI/UX 공통 가이드]스타일 가이드 컴포넌트: https://www.figma.com/community/file/1445014945649906830

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

## Acknowledgement

<img src="./imgs/thankyounote.png" width="500" height="700"/>

### 감사합니다 <3

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/lukasjhan">
        <img src="https://avatars.githubusercontent.com/lukasjhan" width="100px;" alt="Lukas"/>
        <br />
        <sub><b>lukasjhan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yunseorim1116">
        <img src="https://avatars.githubusercontent.com/yunseorim1116" width="100px;" alt="yunseorim1116"/>
        <br />
        <sub><b>yunseorim1116</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hismethod">
        <img src="https://avatars.githubusercontent.com/hismethod" width="100px;" alt="hismethod"/>
        <br />
        <sub><b>hismethod</b></sub>
      </a>
    </td>
  </tr>
</table>

## Contribution

Issue 및 Pull Request는 언제든 환영합니다. 버그 리포트, 기능 제안, 또는 Pull Request 모두 가능합니다.

fork 후 작업하신 후 PR을 보내주시면 감사하겠습니다.
