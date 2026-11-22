// src/components/CoffeeBeansBackground.jsx
import React from 'react';

const CoffeeBeansBackground = () => {
  const beans = [
    { top: '12%', left: '6%', rotate: '25deg', size: 42 },
    { top: '28%', right: '8%', rotate: '-40deg', size: 54 },
    { top: '65%', left: '4%', rotate: '70deg', size: 48 },
    { top: '78%', right: '10%', rotate: '15deg', size: 38 },
    { top: '45%', left: '48%', rotate: '-18deg', size: 60 },
    { top: '18%', left: '38%', rotate: '55deg', size: 34 },
  ];

  return (
    <div className="beans-overlay" aria-hidden="true">
      {beans.map((bean, index) => (
        <svg
          key={index}
          width={bean.size}
          height={bean.size * 1.4}
          viewBox="0 0 100 140"
          className="coffee-bean-svg"
          style={{
            top: bean.top,
            left: bean.left,
            right: bean.right,
            transform: `rotate(${bean.rotate})`,
          }}
        >
          <ellipse cx="50" cy="70" rx="42" ry="62" fill="#2c1d14" />
          <path
            d="M 50 10 C 35 45, 65 95, 50 130"
            stroke="#120c08"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
};

export default CoffeeBeansBackground;