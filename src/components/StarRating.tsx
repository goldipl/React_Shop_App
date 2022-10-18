import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './../css/starrating.css';

const StarRating = () => {
    const [star, setStarValue] = useState(0);

    return ( 
        <div>
            {[...Array(5)].map((value, i) => {
                const starValue: number = i + 1;
                return (
                <label>
                    <input 
                        type='radio' 
                        name='rating' 
                        value={starValue}
                        onClick={() => setStarValue(starValue)}
                    />
                    <FaStar 
                        className='star' 
                        size={20}
                        color={starValue <= star ? 'goldenrod' : 'grey' }
                    />
                </label>
                );
            })}
        </div>
     );
}

export default StarRating;