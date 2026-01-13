import React from 'react';

type IconProps = {
  name: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/images/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
