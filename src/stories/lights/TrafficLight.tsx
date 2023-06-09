import React from 'react';
import Light from './Light';

type Props = {
  /**
   * Determines which Light is active
   */
  variant?: 'green' | 'yellow' | 'red';
};

/**
 * Combines the Light components to create a Traffic Light. Only one Light is on at a time.
 */
const TrafficLight = ({ variant = 'green' }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        border: '1px solid black',
        borderRadius: 15,
        width: 'max-content',
        padding: 10,
        backgroundColor: 'orange',
      }}
    >
      <Light variant="red" disabled={variant === 'red' ? false : true} />
      <Light variant="yellow" disabled={variant === 'yellow' ? false : true} />
      <Light disabled={variant === 'green' ? false : true} />
    </div>
  );
};

export default TrafficLight;
