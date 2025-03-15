import React from 'react';

export const HelpFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 13.509 2.33425 14.94 2.93275 16.2229L2.06334 20.3992C1.98993 20.7518 2.30214 21.0641 2.65475 20.9907L6.31583 20.2285C7.92987 21.3456 9.88851 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill={color}/>
<path d="M10.991 14.1874C10.9171 14.1874 10.8572 14.1275 10.8572 14.0536C10.8606 13.4324 10.919 12.9382 11.0322 12.571C11.1489 12.2038 11.3136 11.9087 11.5264 11.6856C11.7392 11.4591 11.9983 11.2515 12.3037 11.0627C12.5131 10.9323 12.7001 10.7899 12.8648 10.6355C13.033 10.4776 13.1651 10.3026 13.2612 10.1104C13.3573 9.91477 13.4053 9.69685 13.4053 9.45662C13.4053 9.1855 13.3418 8.95042 13.2149 8.75137C13.0879 8.55233 12.9163 8.39789 12.7001 8.28808C12.4873 8.17826 12.2488 8.12335 11.9845 8.12335C11.7409 8.12335 11.5092 8.17654 11.2896 8.28293C11.0734 8.38588 10.8932 8.54375 10.7491 8.75652C10.6368 8.92353 10.5639 9.12657 10.5303 9.36566C10.5155 9.47095 10.429 9.55442 10.3226 9.55442H8.88502C8.7725 9.55442 8.68158 9.4615 8.68999 9.3493C8.73214 8.78712 8.88657 8.30983 9.15328 7.91744C9.45528 7.47816 9.85338 7.1487 10.3476 6.92907C10.8452 6.70943 11.3943 6.59961 11.9948 6.59961C12.6503 6.59961 13.2269 6.71458 13.7245 6.94451C14.2255 7.17444 14.6151 7.50218 14.893 7.92773C15.1744 8.34985 15.3151 8.8509 15.3151 9.43088C15.3151 9.82211 15.2517 10.1722 15.1247 10.481C15.0011 10.7899 14.8244 11.0644 14.5945 11.3047C14.3645 11.5449 14.0917 11.7594 13.776 11.9481C13.498 12.1197 13.2698 12.2982 13.0913 12.4835C12.9163 12.6688 12.7859 12.8867 12.7001 13.1373C12.6177 13.3844 12.5748 13.6898 12.5714 14.0536C12.5714 14.1275 12.5115 14.1874 12.4376 14.1874H10.991ZM11.7529 17.3996C11.444 17.3996 11.1781 17.2898 10.955 17.0702C10.7319 16.8505 10.6204 16.5828 10.6204 16.2671C10.6204 15.9582 10.7319 15.694 10.955 15.4743C11.1781 15.2547 11.444 15.1449 11.7529 15.1449C12.0583 15.1449 12.3226 15.2547 12.5457 15.4743C12.7722 15.694 12.8854 15.9582 12.8854 16.2671C12.8854 16.4764 12.8322 16.6669 12.7258 16.8385C12.6229 17.0101 12.4856 17.1474 12.314 17.2503C12.1458 17.3498 11.9588 17.3996 11.7529 17.3996Z" fill={color}/>
    </svg>
  );
};
