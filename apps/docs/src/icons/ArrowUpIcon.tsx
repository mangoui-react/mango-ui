import React from 'react';

const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 6L3.5 11L12.5 11L8 6Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowUpIcon;
