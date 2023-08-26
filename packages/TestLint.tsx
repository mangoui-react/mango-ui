import React, { useCallback, useState } from 'react';

const TestLint: React.FC = () => {
  const abc = 1;

  const [value, setValue] = useState('');

  const memoizedCallback = useCallback(() => {
    setValue('aaa');
  }, []);

  return <div>TestLint {value}</div>;
};

export default TestLint;
