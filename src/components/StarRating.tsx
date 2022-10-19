import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { RadioInput, Star } from './../styles/starRatingStyles';

const StarRating = () => {
    const [star, setStarValue] = useState(0);

    return ( 
        <>
            {[...Array(5)].map((value, i) => {
                const starValue: number = i + 1;
                return (
                <label>
                    <RadioInput
                        type='radio' 
                        name='rating' 
                        value={starValue}
                        onClick={() => setStarValue(starValue)}
                    >
                    </RadioInput>  
                    <Star>           
                        <FaStar 
                            size={20}
                            color={starValue <= star ? 'goldenrod' : 'grey' }
                        />
                    </Star>        
                </label>
                );
            })}
        </>
     );
}

export default StarRating;