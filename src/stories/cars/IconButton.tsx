import React, { useState } from 'react';

const IconButton = () => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      style={{
        backgroundColor: '#f0f1f2',
        border: '2px solid #0000',
        borderRadius: '8px',
        cursor: 'pointer',
        height: '88px',
        width: '100%',
        padding: 0,
      }}
    >
      Crossovers
    </button>
  );
};

export default IconButton;
