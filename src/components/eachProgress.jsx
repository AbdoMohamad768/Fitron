import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const EachProgress = ({
  icon,
  title,
  percentage,
  color,
  subtitle,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 300);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className={`bg-white dark:bg-dark-main-750 rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
      <div className="relative w-24 h-24 mb-4 transform hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full">
          <CircularProgressbar
            value={animatedPercentage}
            strokeWidth={10}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              pathTransitionDuration: 1,
              pathColor: color,
              trailColor: '#E2E8F0',
              backgroundColor: 'transparent',
            })}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 dark:text-white animate-pulse">
          {icon}
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold flex items-center gap-1 dark:text-white">
          {title}
          <span className="transition-all duration-1000 ease-out">
            ({animatedPercentage}%)
          </span>
        </h3>
        <p className="text-gray-500 dark:text-white text-sm">{subtitle}</p>
      </div>
      <div className="mt-2 w-full">
      </div>
    </div>
  );
};

export default EachProgress;