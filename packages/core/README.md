# @krds-ui/core

이 라이브러리는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 React 컴포넌트 라이브러리입니다. 자세한 가이드 내용은 [이곳](https://uiux.egovframe.go.kr/guide/index.html)에서 확인할 수 있습니다.

## 특징

- 대한민국 정부 디지털 서비스 UI/UX 가이드라인 준수
- React와 tailwindcss 기반의 재사용 가능한 UI 컴포넌트 제공
- TypeScript 지원
- 각 컴포넌트별 라이브러리 배포를 통해 필요한 컴포넌트만 사용 가능

## 설치

```bash
npm install @krds-ui/core
```

```bash
yarn add @krds-ui/core
```

```bash
pnpm add @krds-ui/core
```

## 컴포넌트 목록

### Display

Display는 화면에서 가장 큰 텍스트로 주로 마케팅 용도로 사용한다.

#### Props

| Props     | Type   | Default | Description                                                                   |
| --------- | ------ | ------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'     | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| className | string | ''      | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 66   | 40          | 700         | 150%        | 1px            |
| Medium | 50   | 32          | 700         | 150%        | 1px            |
| Small  | 40   | 25          | 700         | 150%        | 1px            |

#### 예시

```jsx
import { Display } from '@krds-ui/core';

function App() {
  return <Display size="l">Display Large</Display>;
}
```

### Heading

Heading은 페이지 단위 타이틀에 사용한다.

#### Props

| Props     | Type   | Default | Description                                                                   |
| --------- | ------ | ------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'     | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| className | string | ''      | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 50   | 40          | 700         | 150%        | 1px            |
| Medium | 40   | 32          | 700         | 150%        | 1px            |
| Small  | 32   | 25          | 700         | 150%        | 1px            |

#### 예시

```jsx
import { Heading } from '@krds-ui/core';

function App() {
  return <Heading size="l">Heading Large</Heading>;
}
```

### Title

Title은 텝플릿 단위, 모듈 단위의 작말 및 기능을 강조할 때 사용한다.

#### Props

| Props     | Type   | Default | Description                                                                              |
| --------- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| size      | string | 'm'     | 텍스트 크기 설정<br/>'xxl'(가장 큰 텍스트), 'xl', 'l', 'm', 's', 'xs'(가장 작은 텍스트), |
| className | string | ''      | 컴포넌트의 클래스 이름을 지정한다.                                                       |

#### Specification

| Style   | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------- | ---- | ----------- | ----------- | ----------- | -------------- |
| XXlarge | 32   | 25          | 700         | 150%        | 1px            |
| Xlarge  | 25   | 25          | 700         | 150%        | 0              |
| Large   | 21   | 21          | 700         | 150%        | 0              |
| Medium  | 19   | 19          | 700         | 150%        | 0              |
| Small   | 17   | 17          | 700         | 150%        | 0              |
| Xsmall  | 15   | 15          | 700         | 150%        | 0              |

#### 예시

```jsx
import { Title } from '@krds-ui/core';

function App() {
  return <Title size="l">Title Large</Title>;
}
```

### Body

Body는 본문 텍스트로 사용한다.

#### Props

| Props     | Type   | Default   | Description                                                                   |
| --------- | ------ | --------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'       | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| weight    | string | 'regular' | 텍스트 스타일 설정<br/>'regular': 기본 스타일<br/>'bold': 굵게 스타일         |
| className | string | ''        | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size     | Mobile size | Font weight | Line height | Letter spacing |
| ------ | -------- | ----------- | ----------- | ----------- | -------------- |
| Large  | 19       | 19          | 400, 700    | 150%        | 0              |
| Medium | 17(기본) | 17          | 400, 700    | 150%        | 0              |
| Small  | 15       | 15          | 400, 700    | 150%        | 0              |

#### 예시

```jsx
import { Body } from '@krds-ui/core';

function App() {
  return (
    <Body size="l" weight="bold">
      Body Large Bold
    </Body>
  );
}
```

### Detail

Detail은 추가 정보나 작은 정보 텍스트에 사용한다.

#### Props

| Props     | Type   | Default   | Description                                                                   |
| --------- | ------ | --------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'       | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| weight    | string | 'regular' | 텍스트 스타일 설정<br/>'regular': 기본 스타일<br/>'bold': 굵게 스타일         |
| className | string | ''        | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 17   | 17          | 400, 700    | 150%        | 0              |
| Medium | 15   | 15          | 400, 700    | 150%        | 0              |
| Small  | 13   | 13          | 400, 700    | 150%        | 0              |

#### 예시

```jsx
import { Detail } from '@krds-ui/core';

function App() {
  return (
    <Detail size="s" weight="regular">
      Detail Small Regular
    </Detail>
  );
}
```

### Label

구성 요소 내부의 텍스트로 사용한다. (예: Button, Label, Chips ...)

#### Props

| Props     | Type   | Default   | Description                                                                   |
| --------- | ------ | --------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'       | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| weight    | string | 'regular' | 텍스트 스타일 설정<br/>'regular': 기본 스타일<br/>'bold': 굵게 스타일         |
| className | string | ''        | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 19   | 19          | 400, 700    | 150%        | 0              |
| Medium | 17   | 17          | 400, 700    | 150%        | 0              |
| Small  | 15   | 15          | 400, 700    | 150%        | 0              |
| Xsmall | 13   | 13          | 400, 700    | 150%        | 0              |

#### 예시

```jsx
import { Label } from '@krds-ui/core';

function App() {
  return (
    <Label size="l" weight="bold">
      Label Large Bold
    </Label>
  );
}
```

### Links

문장 내의 링크 단어로 이루어진 텍스트 특은 브랜드크럼의 매뉴와 같이 독립적인 링크에 사용한다.

#### Props

| Props     | Type   | Default   | Description                                                                   |
| --------- | ------ | --------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'       | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| weight    | string | 'regular' | 텍스트 스타일 설정<br/>'regular': 기본 스타일<br/>'bold': 굵게 스타일         |
| className | string | ''        | 컴포넌트의 클래스 이름을 지정한다.                                            |

#### Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 19   | 19          | 400, 700    | 150%        | 0              |
| Medium | 17   | 17          | 400, 700    | 150%        | 0              |
| Small  | 15   | 15          | 400, 700    | 150%        | 0              |

#### 예시

```jsx
import { Link } from '@krds-ui/core';

function App() {
  return (
    <Link size="l" weight="bold">
      Link Large Bold
    </Link>
  );
}
```
