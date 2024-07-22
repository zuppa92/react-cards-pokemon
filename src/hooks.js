import { useState } from 'react';

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };

  return [isFlipped, toggleFlip];
}

export default useFlip;