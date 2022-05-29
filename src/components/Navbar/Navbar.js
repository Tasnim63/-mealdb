import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand fw-bold  fs-3" href="#">foodApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <CustomLink class="nav-link active fw-bold" aria-current="page" to="/home">Home</CustomLink>
          
        </li>
        
        <li><CustomLink class="nav-link active fw-bold" aria-current="page" to="/allfood">AllFood</CustomLink></li>
        
        <li><CustomLink class="nav-link active fw-bold" aria-current="page" to="/blogs">Blogs</CustomLink></li>
        
        <li><CustomLink class="nav-link active fw-bold" aria-current="page" to="/ourservices">Services</CustomLink></li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;