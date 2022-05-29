import React from 'react';

const Search = () => {
    return (
        <div>
                <h1
         
         className=' fw-bold fs-2 text-center m-4  '>Find Your Food</h1>
             <div className='bg-secondary p-5 '>
         
              <div className=' container m-5'>
             <form class="d-flex">
            <input class="form-control me-2 " type="search" placeholder="Search Your Food"    aria-label="Search"/>
             <button class="btn btn-outline-light" type="submit">Search</button>
         </form>
        </div>
      </div>
       </div>
    );
};

export default Search;