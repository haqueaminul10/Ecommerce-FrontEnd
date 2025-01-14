import React from 'react';

interface ShoppingCartIconProps {
  size?: number;
  color?: string;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ size, color }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='0 0 52 52'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path d='M20.1,26H44c0.7,0,1.4-0.5,1.5-1.2l4.4-15.4c0.3-1.1-0.5-2-1.5-2H11.5l-0.6-2.3c-0.3-1.1-1.3-1.8-2.3-1.8 H4.6c-1.3,0-2.5,1-2.6,2.3C1.9,7,3.1,8.2,4.4,8.2h2.3l7.6,25.7c0.3,1.1,1.2,1.8,2.3,1.8h28.2c1.3,0,2.5-1,2.6-2.3 c0.1-1.4-1.1-2.6-2.4-2.6H20.2c-1.1,0-2-0.7-2.3-1.7v-0.1C17.4,27.5,18.6,26,20.1,26z' />
        <circle cx='20.6' cy='44.6' r='4' />
        <circle cx='40.1' cy='44.6' r='4' />
      </g>
    </svg>
  );
};

export default ShoppingCartIcon;
