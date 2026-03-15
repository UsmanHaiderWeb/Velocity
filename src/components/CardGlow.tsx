import React from 'react';

interface CardGlowProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-center' | 'center';
  className?: string;
}

export default function CardGlow({ position = 'top-left', className = '' }: CardGlowProps) {
  const positionClasses = {
    'top-left': '-top-[100px] -left-[100px]',
    'top-right': '-top-[100px] -right-[100px]',
    'bottom-left': '-bottom-[100px] -left-[100px]',
    'bottom-right': '-bottom-[100px] -right-[100px]',
    'bottom-center': '-bottom-[100px] left-1/2 -translate-x-1/2',
    'top-center': '-top-[100px] left-1/2 -translate-x-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={`absolute w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,115,0,0.8)_0%,rgba(255,115,0,0)_70%)] rounded-full blur-[40px] opacity-80 z-0 pointer-events-none ${positionClasses[position]} ${className}`} />
  );
}
