import { useState } from 'react'; 

export const Header = () => {
    
    const [location, ] = useState("The Hollow Of Orren");
    const [moves, ] = useState(5); 
    
    return(
        <div className='flex bg-[#519975] w-full justify-between'>
           <div className='flex justify-between'>
            <p className='pl-10'>{location}</p>
            <p>Moves: {moves}</p>
           </div>
        </div>
    )
}