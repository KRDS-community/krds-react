import React from 'react';

export const FileHwpIcon: React.FC<{
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
      <g id="img_file_hwp">
<g clip-path="url(#clip0_564_25789)">
<rect id="Rectangle 19614" width="32" height="32" rx="2" fill={color}/>
<path id="hwp" fill-rule="evenodd" clip-rule="evenodd" d="M17.5945 6V8.35616H22.9725V10.5479H10.0215V8.35616H15.3995V6H17.5945ZM10 21.0137H12.1951V23.8082H22.973V26H12.1951H10.022H10V21.0137ZM20.6129 15.1342C20.6129 12.7868 18.6999 10.8767 16.3489 10.8767C13.998 10.8767 12.085 12.7868 12.085 15.1342C12.085 17.4816 13.998 19.3918 16.3489 19.3918C18.6999 19.3918 20.6129 17.4816 20.6129 15.1342ZM16.3489 17.2C15.208 17.2 14.28 16.2734 14.28 15.1342C14.28 13.9951 15.208 13.0685 16.3489 13.0685C17.4898 13.0685 18.4178 13.9951 18.4178 15.1342C18.4178 16.2734 17.4898 17.2 16.3489 17.2ZM17.979 21.4521C17.979 22.2692 17.3156 22.9316 16.4973 22.9316C15.679 22.9316 15.0156 22.2692 15.0156 21.4521C15.0156 20.635 15.679 19.9727 16.4973 19.9727C17.3156 19.9727 17.979 20.635 17.979 21.4521Z" fill={color}/>
</g>
</g>
<defs>
<clipPath id="clip0_564_25789">
<path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z" fill={color}/>
</clipPath>
</defs>
    </svg>
  );
};
