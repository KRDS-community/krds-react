import React from 'react';

export const FileHtmlIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="img_file_html">
<g clip-path="url(#clip0_564_25758)">
<rect id="Rectangle 19614" width="32" height="32" rx="2" fill={color}/>
<path id="html" fill-rule="evenodd" clip-rule="evenodd" d="M11.1507 13.0947H15.7764V13.0942H22.9799H23.9246L23.8384 14.0355L23.0151 23.2634L22.9629 23.8554L15.7894 25.8443V25.8446L15.7735 25.8492L8.59261 23.8555L8.10156 18.353H9.72327H11.6206L11.8701 21.1485L15.7735 22.202L15.7764 22.2012V22.2008L19.6866 21.1461L20.0926 16.5996H15.789V16.6001H7.94467L7.08392 6.94127L7 6H15.7764H15.7765H15.789H24.5574L24.4735 6.94127L24.3136 8.71835L24.2433 9.50539H24.2319H15.789H15.7764H10.8309L11.1507 13.0947Z" fill={color}/>
</g>
</g>
<defs>
<clipPath id="clip0_564_25758">
<path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z" fill={color}/>
</clipPath>
</defs>
    </svg>
  );
};
