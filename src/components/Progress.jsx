import { useState, useEffect } from 'react';

const Progress = () => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const targetPercentage = 81;
  const circumference = 2 * Math.PI * 45;
  const dashOffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(targetPercentage);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm animate-fade-in-3 hover:shadow-md transition-all duration-300">
      <h2 className="font-bold text-[25px] mb-8 animate-fade-in text-center">Goal</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 transform transition-transform hover:scale-105 duration-500">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#5CD85A"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{ '--progress': `${animatedPercentage}` }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold transition-all duration-1000 ease-out">
              {animatedPercentage}%
            </span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4 text-center w-48 animate-fade-in-4">
          this is the Active Goals of the User 
        </p>
        <button className="mt-6 px-4 py-2 rounded-md hover:bg-green-300  hover:-translate-y-1 transition duration-150 cursor-pointer ">
          Set Target
        </button>
      </div>
    </div>
  );
};

export default Progress;