import React from 'react';

type Props = {
  variant?: 'green' | 'yellow' | 'red';
  disabled?: true | false;
};

const Light = ({ variant = 'green', disabled = false }: Props) => {
  return (
    <div
      style={{
        background: disabled ? 'gray' : variant,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
