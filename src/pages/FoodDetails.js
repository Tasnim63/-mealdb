import React from 'react';


const FoodDetails = ({ food }) => {
    const { id, img, name } = food;
   
    return ( 
        <>
            <div  className='col-sm-1 col-md-2 col-lg-4 mb-5 '>
                <div
           
                    class="shadow">
              <img src={img} class="card-img-top" alt="..."/>
             <div class="card-body">
            <h5 class="card-title fw-bold">{name}</h5>
             <p class="card-text">Some quick example text to build on the card title   and make up the bulk of the card's content.</p>
              <button  class="btn btn-outline-info fw-bold">Book Now</button>
             </div>
        </div> 
           </div>
       </>
    );
};

export default FoodDetails;