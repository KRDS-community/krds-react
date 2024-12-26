import { colors } from '../colors/color';
import { Label } from './Label';

export type MastheadProps<E extends React.ElementType> = {
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Masthead = <E extends React.ElementType = 'div'>({
  className = '',
  ...props
}: MastheadProps<E>) => {
  const flagStyle = {
    display: 'inline-block',
    width: 24,
    height: 16,
  };

  return (
    <div className={`${className}`} {...props}>
      <div
        className="w-full flex flex-row items-center px-4 gap-5 py-2"
        style={{
          backgroundColor: colors.secondary5,
        }}
      >
        <RepublicOfKoreaFlagIcon style={flagStyle} />
        <Label
          size="s"
          color={'gray-90'}
          style={{
            display: 'inline-block',
          }}
        >
          이 누리집은 대한민국 공식 전자정부 누리집입니다.
        </Label>
      </div>
    </div>
  );
};

const RepublicOfKoreaFlagIcon: React.FC<{ style?: React.CSSProperties }> = ({
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-72 -48 144 96"
    style={style}
  >
    <path fill="#fff" d="M-72-48v96H72v-96z" />
    <g stroke="#000" stroke-width="4">
      <path
        transform="rotate(33.69006752598)"
        d="M-50-12v24m6 0v-24m6 0v24m76 0V1m0-2v-11m6 0v11m0 2v11m6 0V1m0-2v-11"
      />
      <path
        transform="rotate(-33.69006752598)"
        d="M-50-12v24m6 0V1m0-2v-11m6 0v24m76 0V1m0-2v-11m6 0v24m6 0V1m0-2v-11"
      />
    </g>
    <g transform="rotate(33.69006752598)">
      <path fill="#cd2e3a" d="M12 0a18 18 0 11-36 0 24 24 0 1148 0" />
      <path
        fill="#0047a0"
        d="M0 0a12 12 0 1124 0 24 24 0 11-48 0 12 12 0 1024 0"
      />
    </g>
  </svg>
);
