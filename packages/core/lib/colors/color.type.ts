type PrimaryColors =
  | 'primary'
  | 'primary-0'
  | 'primary-5'
  | 'primary-10'
  | 'primary-20'
  | 'primary-30'
  | 'primary-40'
  | 'primary-50'
  | 'primary-60'
  | 'primary-70'
  | 'primary-80'
  | 'primary-90'
  | 'primary-100';

type SecondaryColors =
  | 'secondary'
  | 'secondary-0'
  | 'secondary-5'
  | 'secondary-10'
  | 'secondary-20'
  | 'secondary-30'
  | 'secondary-40'
  | 'secondary-50'
  | 'secondary-60'
  | 'secondary-70'
  | 'secondary-80'
  | 'secondary-90'
  | 'secondary-100';

type GrayColors =
  | 'gray-0'
  | 'gray-5'
  | 'gray-10'
  | 'gray-20'
  | 'gray-30'
  | 'gray-40'
  | 'gray-50'
  | 'gray-60'
  | 'gray-70'
  | 'gray-80'
  | 'gray-90'
  | 'gray-100';

type PointColors =
  | 'point'
  | 'point-0'
  | 'point-5'
  | 'point-10'
  | 'point-20'
  | 'point-30'
  | 'point-40'
  | 'point-50'
  | 'point-60'
  | 'point-70'
  | 'point-80'
  | 'point-90'
  | 'point-100';

type DangerColors =
  | 'danger'
  | 'danger-5'
  | 'danger-10'
  | 'danger-20'
  | 'danger-30'
  | 'danger-40'
  | 'danger-50'
  | 'danger-60'
  | 'danger-70'
  | 'danger-80'
  | 'danger-90';

type WarningColors =
  | 'warning'
  | 'warning-5'
  | 'warning-10'
  | 'warning-20'
  | 'warning-30'
  | 'warning-40'
  | 'warning-50'
  | 'warning-60'
  | 'warning-70'
  | 'warning-80'
  | 'warning-90';

type SuccessColors =
  | 'success'
  | 'success-5'
  | 'success-10'
  | 'success-20'
  | 'success-30'
  | 'success-40'
  | 'success-50'
  | 'success-60'
  | 'success-70'
  | 'success-80'
  | 'success-90';

type InfoColors =
  | 'info'
  | 'info-5'
  | 'info-10'
  | 'info-20'
  | 'info-30'
  | 'info-40'
  | 'info-50'
  | 'info-60'
  | 'info-70'
  | 'info-80'
  | 'info-90';

export type Color =
  | PrimaryColors
  | SecondaryColors
  | GrayColors
  | PointColors
  | DangerColors
  | WarningColors
  | SuccessColors
  | InfoColors;

export const getTextColorClassname = (color: Color): string => {
  const colorClassMap = {
    primary: 'text-primary',
    'primary-0': 'text-primary-0',
    'primary-5': 'text-primary-5',
    'primary-10': 'text-primary-10',
    'primary-20': 'text-primary-20',
    'primary-30': 'text-primary-30',
    'primary-40': 'text-primary-40',
    'primary-50': 'text-primary-50',
    'primary-60': 'text-primary-60',
    'primary-70': 'text-primary-70',
    'primary-80': 'text-primary-80',
    'primary-90': 'text-primary-90',
    'primary-100': 'text-primary-100',
    secondary: 'text-secondary',
    'secondary-0': 'text-secondary-0',
    'secondary-5': 'text-secondary-5',
    'secondary-10': 'text-secondary-10',
    'secondary-20': 'text-secondary-20',
    'secondary-30': 'text-secondary-30',
    'secondary-40': 'text-secondary-40',
    'secondary-50': 'text-secondary-50',
    'secondary-60': 'text-secondary-60',
    'secondary-70': 'text-secondary-70',
    'secondary-80': 'text-secondary-80',
    'secondary-90': 'text-secondary-90',
    'secondary-100': 'text-secondary-100',
    gray: 'text-gray',
    'gray-0': 'text-gray-0',
    'gray-5': 'text-gray-5',
    'gray-10': 'text-gray-10',
    'gray-20': 'text-gray-20',
    'gray-30': 'text-gray-30',
    'gray-40': 'text-gray-40',
    'gray-50': 'text-gray-50',
    'gray-60': 'text-gray-60',
    'gray-70': 'text-gray-70',
    'gray-80': 'text-gray-80',
    'gray-90': 'text-gray-90',
    'gray-100': 'text-gray-100',
    point: 'text-point',
    'point-0': 'text-point-0',
    'point-5': 'text-point-5',
    'point-10': 'text-point-10',
    'point-20': 'text-point-20',
    'point-30': 'text-point-30',
    'point-40': 'text-point-40',
    'point-50': 'text-point-50',
    'point-60': 'text-point-60',
    'point-70': 'text-point-70',
    'point-80': 'text-point-80',
    'point-90': 'text-point-90',
    'point-100': 'text-point-100',
    danger: 'text-danger',
    'danger-5': 'text-danger-5',
    'danger-10': 'text-danger-10',
    'danger-20': 'text-danger-20',
    'danger-30': 'text-danger-30',
    'danger-40': 'text-danger-40',
    'danger-50': 'text-danger-50',
    'danger-60': 'text-danger-60',
    'danger-70': 'text-danger-70',
    'danger-80': 'text-danger-80',
    'danger-90': 'text-danger-90',
    warning: 'text-warning',
    'warning-5': 'text-warning-5',
    'warning-10': 'text-warning-10',
    'warning-20': 'text-warning-20',
    'warning-30': 'text-warning-30',
    'warning-40': 'text-warning-40',
    'warning-50': 'text-warning-50',
    'warning-60': 'text-warning-60',
    'warning-70': 'text-warning-70',
    'warning-80': 'text-warning-80',
    'warning-90': 'text-warning-90',
    success: 'text-success',
    'success-5': 'text-success-5',
    'success-10': 'text-success-10',
    'success-20': 'text-success-20',
    'success-30': 'text-success-30',
    'success-40': 'text-success-40',
    'success-50': 'text-success-50',
    'success-60': 'text-success-60',
    'success-70': 'text-success-70',
    'success-80': 'text-success-80',
    'success-90': 'text-success-90',
    info: 'text-info',
    'info-5': 'text-info-5',
    'info-10': 'text-info-10',
    'info-20': 'text-info-20',
    'info-30': 'text-info-30',
    'info-40': 'text-info-40',
    'info-50': 'text-info-50',
    'info-60': 'text-info-60',
    'info-70': 'text-info-70',
    'info-80': 'text-info-80',
    'info-90': 'text-info-90',
  };

  return colorClassMap[color];
};
