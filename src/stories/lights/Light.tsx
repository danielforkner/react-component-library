import React from 'react';

type Props = {
  variant?: 'green' | 'yellow' | 'red';
  /**
   * Determines if the light is on or off
   */
  disabled?: boolean;
};

/**
 * Basic Light component that can be green, red, or yellow
 */
const Light = ({ variant = 'green', disabled = false }: Props) => {
  return (
    <div
      style={{
        background: disabled ? 'gray' : variant,
        borderRadius: '50%',
        border: '1px solid black',
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
