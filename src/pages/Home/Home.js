import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Cart from '../Cart/Cart';

import FoodDetails from '../FoodDetails';
import Search from '../Search';
import './Home.css'
const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('food.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, []);
  if (foods.length) {
    foods.length = 3;
}
    return (
        <>
            <div>
          
          <Carousel variant="dark">
    <Carousel.Item>
      <img 
        className="caro-img d-block w-100 " 
        src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='fs-1 text-light '>Vegetables Slate</h1>
        <p className=' text-light'>A well-balanced diet provides all of the: energy you need to keep active throughout the day. such as some cancers.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="caro-img d-block  w-100"
        src="https://img.freepik.com/free-vector/fresh-sandwich-chalkboard-background-advertisement-poster_1284-19550.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h1 className='fs-1 text-light '>fresh Sandwich</h1>
        <p className=' text-light'>A well-balanced diet provides all of the: energy you need to keep active throughout the day. such as some cancers.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="caro-img d-block w-100"
        src="https://img.freepik.com/free-photo/roasted-pork-steak-dark-wooden-surface_1150-44366.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1 className='fs-1 text-light '>Roasted Pork</h1>
        <p className=' text-light'>A well-balanced diet provides all of the: energy you need to keep active throughout the day. such as some cancers.</p>
      </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
            </div>
        <Cart></Cart>
       
        <div className=' container'>
        <h1
         data-aos="zoom-in"
                className=' fw-bold fs-2 text-center  m-5 text-gray-400 '> Our Healthy Foods</h1>
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
      
        <div>
          <h1 className=' text-center fw-bold fs-3 my-5 '>Your Services</h1> 
          <div
                         data-aos="flip-up"
                        data-aos-duration="1500"
                        class=" shadow p-4 d-flex flex-column flex-lg-row  m-5">
                       <img  className=' service-img ' src="https://img.freepik.com/free-vector/ramen-soup-blue-background_52683-46004.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.1.270866342.1647831681" alt="..."/>
                      
                        <div class="card-body p-4 m-4">
                        <h5 class="card-title fw-bold text-secondary  mb-2 mt-2">Chef Mate</h5>
                            <p>The foodservice or catering  industry includes the businesses, institutions, and companies which prepare meals outside the home. It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.
                                The foodservice or catering  industry includes the businesses, institutions, and companies which prepare meals outside the home. It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.
                                <br />
                                The foodservice or catering  industry includes the businesses, institutions, and companies which prepare meals outside the home. It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.
              </p>
              <button className=' btn btn-outline-info'>Go To ServicePage</button>
                    </div>
                    </div>
        </div>
        
        <Search></Search>
        </>
    );
};

export default Home;