# @krds-ui/core

KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 React 컴포넌트 라이브러리입니다. 자세한 가이드 내용은 [이곳](https://uiux.egovframe.go.kr/guide/index.html)에서 확인할 수 있습니다.

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

컴포넌트 props에 사용된 Color 타입은 추후 섹션에서 설명합니다.

### Display

Display는 화면에서 가장 큰 텍스트로 주로 마케팅 용도로 사용한다.

#### Props

| Props     | Type   | Default | Description                                                                   |
| --------- | ------ | ------- | ----------------------------------------------------------------------------- |
| size      | string | 'm'     | 텍스트 크기 설정<br/>'l': 큰 텍스트<br/>'m': 보통 텍스트<br/>'s': 작은 텍스트 |
| color     | string | ''      | 컴포넌트의 색상을 지정한다.                                                   |
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
| color     | string | ''      | 컴포넌트의 색상을 지정한다.                                                   |
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
| color     | string | ''      | 컴포넌트의 색상을 지정한다.                                                              |
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
| color     | string | ''        | 컴포넌트의 색상을 지정한다.                                                   |
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
| color     | string | ''        | 컴포넌트의 색상을 지정한다.                                                   |
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
| color     | string | ''        | 컴포넌트의 색상을 지정한다.                                                   |
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
| color     | string | ''        | 컴포넌트의 색상을 지정한다.                                                   |
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

## Color

KRDS-React는 대한민국 정부 디지털 서비스 UI/UX 가이드라인에 기반한 색상을 제공합니다.

아래 표는 props 값과 매칭되는 색상 코드를 표로 나타낸 것입니다.

### Primary Colors

| 문자열      | 색상 코드 |
| ----------- | --------- |
| primary     | #246BEB   |
| primary-0   | #FFFFFF   |
| primary-5   | #EFF5FF   |
| primary-10  | #D3E1FB   |
| primary-20  | #A7C4F7   |
| primary-30  | #7CA6F3   |
| primary-40  | #5089EF   |
| primary-50  | #246BEB   |
| primary-60  | #1D56BC   |
| primary-70  | #16408D   |
| primary-80  | #0E2B5E   |
| primary-90  | #07152F   |
| primary-100 | #000000   |

### Secondary Colors

| 문자열        | 색상 코드 |
| ------------- | --------- |
| secondary     | #003675   |
| secondary-0   | #FFFFFF   |
| secondary-5   | #EDF1F5   |
| secondary-10  | #CDD7E4   |
| secondary-20  | #B4C4D6   |
| secondary-30  | #99B0CB   |
| secondary-40  | #2A5C96   |
| secondary-50  | #003675   |
| secondary-60  | #002B5E   |
| secondary-70  | #002046   |
| secondary-80  | #00162F   |
| secondary-90  | #000B17   |
| secondary-100 | #000000   |

### Gray Colors

| 문자열   | 색상 코드 |
| -------- | --------- |
| gray-0   | #FFFFFF   |
| gray-5   | #F8F8F8   |
| gray-10  | #F0F0F0   |
| gray-20  | #E4E4E4   |
| gray-30  | #D8D8D8   |
| gray-40  | #C6C6C6   |
| gray-50  | #8E8E8E   |
| gray-60  | #717171   |
| gray-70  | #555555   |
| gray-80  | #2D2D2D   |
| gray-90  | #1D1D1D   |
| gray-100 | #000000   |

### Point Colors

| 문자열    | 색상 코드 |
| --------- | --------- |
| point     | #E71825   |
| point-0   | #FFFFFF   |
| point-5   | #FDF2F3   |
| point-10  | #FBD6D8   |
| point-20  | #F5A3A8   |
| point-30  | #F1747C   |
| point-40  | #EC4651   |
| point-50  | #E71825   |
| point-60  | #B9131E   |
| point-70  | #8B0E16   |
| point-80  | #5C0A0F   |
| point-90  | #2E0507   |
| point-100 | #000000   |

### Danger Colors

| 문자열    | 색상 코드 |
| --------- | --------- |
| danger    | #EB003B   |
| danger-5  | #FEECF0   |
| danger-10 | #FCD4DE   |
| danger-20 | #F799B1   |
| danger-30 | #F36689   |
| danger-40 | #EF3E5E   |
| danger-50 | #EB003B   |
| danger-60 | #D50136   |
| danger-70 | #8D0023   |
| danger-80 | #5E0018   |
| danger-90 | #2F000C   |

### Warning Colors

| 문자열     | 색상 코드 |
| ---------- | --------- |
| warning    | #FFB724   |
| warning-5  | #FFF8E9   |
| warning-10 | #FFEAC1   |
| warning-20 | #FFE2A7   |
| warning-30 | #FFD47C   |
| warning-40 | #FFC550   |
| warning-50 | #FFB724   |
| warning-60 | #98690A   |
| warning-70 | #66490E   |
| warning-80 | #4D370B   |
| warning-90 | #332507   |

### Success Colors

| 문자열     | 색상 코드 |
| ---------- | --------- |
| success    | #008A1E   |
| success-5  | #EEF7F0   |
| success-10 | #CEE9D4   |
| success-20 | #B2DCBB   |
| success-30 | #8CCA99   |
| success-40 | #33A14B   |
| success-50 | #008A1E   |
| success-60 | #006E18   |
| success-70 | #005312   |
| success-80 | #00370C   |
| success-90 | #002207   |

### Info Colors

| 문자열  | 색상 코드 |
| ------- | --------- |
| info    | #2768FF   |
| info-5  | #E9F0FF   |
| info-10 | #D4E1FF   |
| info-20 | #A9C3FF   |
| info-30 | #7DA4FF   |
| info-40 | #5286FF   |
| info-50 | #2768FF   |
| info-60 | #1F53CC   |
| info-70 | #173E99   |
| info-80 | #0C1F4D   |
| info-90 | #040A1A   |
