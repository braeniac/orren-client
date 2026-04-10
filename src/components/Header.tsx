import { useState } from 'react'; 

export const Header = () => {
  const [location] = useState("The hallow cave");
  const [score] = useState(0); 
  const [moves] = useState(3); 
    
  return (
    <div className="w-full bg-[#519975] px-6 py-2 text-[var(--text)] font-mono">
      <div className="flex justify-between items-center">
        <p className="uppercase tracking-wide">
          LOCATION: {location}
        </p>
        <div className="flex gap-6">
          <p>SCORE: {score}</p>
          <p>MOVES: {moves}</p>
        </div>
      </div>
    </div>
  );
};
