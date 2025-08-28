import { useState, useCallback } from 'react';

const ClickableButton = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return (
    <button className="clickable" onClick={handleClick}>
      Clicked:
      {' '}
      {counter}
    </button>
  );
};

export default ClickableButton;
