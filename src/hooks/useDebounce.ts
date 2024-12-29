import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number = 2000): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler); // 이전 타이머 정리
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;