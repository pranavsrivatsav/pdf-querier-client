import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data or perform some action
    setData('Hello from custom hook');
  }, []);

  return data;
};

export default useCustomHook;
