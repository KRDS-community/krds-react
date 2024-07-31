import React from 'react'

type TypographyVariant =
  | 'display'
  | 'heading'
  | 'title'
  | 'body'
  | 'detail'
  | 'label'
  | 'links'
type TypographySize =
  | 'large'
  | 'medium'
  | 'small'
  | 'xlarge'
  | 'xxlarge'
  | 'xsmall'

// 각 variant에 대한 설정을 정의합니다.
type VariantConfig = {
  [key in TypographyVariant]: {
    sizes: TypographySize[]
    defaultElement: keyof JSX.IntrinsicElements
  }
}

// variant별 설정을 정의합니다.
const variantConfig: VariantConfig = {
  display: { sizes: ['large', 'medium', 'small'], defaultElement: 'h1' },
  heading: { sizes: ['large', 'medium', 'small'], defaultElement: 'h2' },
  title: {
    sizes: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'],
    defaultElement: 'h3',
  },
  body: { sizes: ['large', 'medium', 'small'], defaultElement: 'p' },
  detail: { sizes: ['large', 'medium', 'small'], defaultElement: 'span' },
  label: {
    sizes: ['large', 'medium', 'small', 'xsmall'],
    defaultElement: 'label',
  },
  links: { sizes: ['large', 'medium', 'small'], defaultElement: 'a' },
}

type TypographyProps<E extends React.ElementType> = {
  variant: TypographyVariant
  size: TypographySize
  as?: E
  children: React.ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<E>

export const Typography = <E extends React.ElementType = 'div'>({
  variant,
  size,
  as,
  children,
  className = '',
  ...props
}: TypographyProps<E>) => {
  if (!variantConfig[variant].sizes.includes(size)) {
    console.warn(
      `유효하지 않은 크기 "${size}"가 "${variant}" variant에 사용되었습니다.`,
    )
    size = variantConfig[variant].sizes[0]
  }

  const Element = as || variantConfig[variant].defaultElement

  // Tailwind CSS 클래스
  const sizeClass = `text-${variant}-${size}`
  const weightClass = ['display', 'heading', 'title'].includes(variant)
    ? 'font-bold'
    : 'font-regular'

  return (
    <Element className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </Element>
  )
}

export default Typography
