'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

/**
 * For this exercise, im implementing 4 animations:
 */
const ANIMATIONS = ['fadeIn', 'sliding', 'scaling', 'rotating'];


/**
 * Each animation has a square of size:
 */
const BOX_SIZE = 500;


/**
 * Given an animationId and a percentage value representing the animation status, return the classnames needed
 * @param animationId
 * @param percentageValue
 */
const getClassNamesByAnimationPercentage = (animationId: string, percentageValue: number) => {
  switch (animationId) {
    case 'fadeIn':
      return `opacity-[${percentageValue}%]`;
    case 'sliding':
      return `translate-x-[${percentageValue-1}%]`;
    case 'scaling':
      return `scale-[${100 - percentageValue}%]`;
    case 'rotating':
      return `rotate-[${Math.floor(percentageValue / 2)}deg]`;
  }
};

export default function Home() {
  const [animationsPercentages, setAnimationsClassNames] = useState<Record<string, number>>({
    fadeIn: 0,
    sliding: 0,
    scaling: 0,
    rotating: 0
  });

  /**
   * When scrolling, calculate the percentage that certain element has been scrolled
  */
  const handleScroll = () => {
    setAnimationsClassNames(
      ANIMATIONS.reduce((acc, curr) => {
        const element = document.getElementById(curr);
        const rect = element.getBoundingClientRect();
        let totalPercentageScrolled = (BOX_SIZE - rect.top) / 3;
        if (totalPercentageScrolled > 100) {
          totalPercentageScrolled = 100
        } else if (totalPercentageScrolled < 0) {
          totalPercentageScrolled = 0
        }
        acc[curr] = Math.floor(totalPercentageScrolled);
        return acc;
      }, {})
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {ANIMATIONS.map((animation) => (
        <div
          id={animation}
          key={animation}
          className={clsx(
            'bg-purple-900',
            `my-[800px]`,
            'place-content-center',
            `w-[500px]`,
            `h-[500px]`,
            'text-gray-50',
            'grid',
            'mx-auto',
            getClassNamesByAnimationPercentage(animation, animationsPercentages[animation]),
          )}
        >
          <span>{animation}</span>
        </div>
      ))}
    </>
  );
}
