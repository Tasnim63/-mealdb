import React, { useEffect, useState } from 'react';
import FoodDetails from './FoodDetails';

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('food.json')
          .then(res => res.json())
        .then(data => setFoods(data))
      },[])
    return (
        <>
            <h1 className=' text-center fw-bold fs-3 my-5 '> Find Your Favourite Food</h1>
 
            
            <div className=' container'>
       
        <div className=' row' >
         
            {
               foods.map(food => <FoodDetails
                key={food.id}
               food={food}
               ></FoodDetails>
             
              )
                    }
          </div>
        </div>            
   
        </>
    );
};

export default AllFood;