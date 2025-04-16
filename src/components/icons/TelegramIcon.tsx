import React from 'react';

const TelegramIcon: React.FC<{className?: string, fill?: string}> = ({className = '', fill = '#0088cc'}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      width="24"
      height="24"
      fill={fill}
    >
      <path d="M19.44 3.024l-14.879 5.73c-1.015.389-1.011.931-.186 1.173l3.818 1.19 1.418 4.34c.172.469.309.638.535.656.227.018.368-.056.568-.232.115-.1.683-.663 1.337-1.317l3.29 2.414c.605.334 1.044.161 1.196-.562l2.16-10.18c.221-.822-.316-1.195-.987-.904zm-8.555 8.039l-.622 5.341-1.148-4.325 9.263-5.746-7.493 4.73z"/>
    </svg>
  );
};

export default TelegramIcon; 