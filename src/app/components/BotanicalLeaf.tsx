import React from 'react';

export const BotanicalLeaf = ({ className, width = 48, height = 48 }: { className?: string, width?: number, height?: number }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 22C12 22 11 16 11 12C11 8 13 4 13 4M13 4C13 4 18 5 20 8C22 11 19 14 19 14C19 14 16 14 14 11C12 8 13 4 13 4ZM13 4C13 4 8 5 6 8C4 11 7 14 7 14C7 14 10 14 12 11C14 8 13 4 13 4ZM11.5 12C11.5 12 7 12 5 15C3 18 6 20 6 20C6 20 9 19 10 16C11 13 11.5 12 11.5 12ZM11.5 12C11.5 12 16 12 18 15C20 18 17 20 17 20C17 20 14 19 13 16C12 13 11.5 12 11.5 12Z" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
