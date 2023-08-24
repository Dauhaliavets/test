import { useState, useEffect } from 'react';
import './styles.less';

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress > 99) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader__indicator' style={{ width: `${progress}%` }}></div>
      </div>
      <span className='loader__progress'>{`Loading ${progress}%`}</span>
    </div>
  );
};
