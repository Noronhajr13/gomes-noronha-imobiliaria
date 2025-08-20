import React from 'react';

interface HeroBackgroundProps {
  variant?: 'default' | 'animated' | 'minimal' | 'particles';
  primaryColor?: string;
  secondaryColor?: string;
  opacity?: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  variant = 'default',
  primaryColor = '#FFFFFF',
  secondaryColor = '#D1D5DB',
  opacity = 0.1
}) => {
  
  const renderBackground = () => {
    switch (variant) {
      case 'animated':
        return (
          <>
            {/* Círculos animados */}
            <div className="absolute bg-white rounded-full top-20 left-10 w-72 h-72 blur-3xl animate-pulse"></div>
            <div className="absolute bg-gray-300 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl animate-bounce slow-bounce"></div>
            <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full top-1/2 left-1/2 blur-2xl animate-ping"></div>
          </>
        );
      
      case 'particles':
        return (
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'minimal':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        );
      
      default:
        return (
          <>
            <div className="absolute bg-white rounded-full top-20 left-10 w-72 h-72 blur-3xl"></div>
            <div className="absolute bg-gray-300 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl"></div>
          </>
        );
    }
  };

  return (
    <div 
      className="absolute inset-0" 
      style={{ opacity }}
    >
      {renderBackground()}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, ${primaryColor} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
    </div>
  );
};

export default HeroBackground;