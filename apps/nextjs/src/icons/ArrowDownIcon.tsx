import React from 'react';

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 11L3.5 6L12.5 6L8 11Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowDownIcon;
