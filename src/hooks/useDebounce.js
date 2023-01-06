import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debounceVal, setdebounceVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
