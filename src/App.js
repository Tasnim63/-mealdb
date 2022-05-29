
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs';
import OurServices from './pages/OurServices';
import  AOS  from 'aos';
import AllFood from './pages/AllFood';

function App() {
  AOS.init();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
       
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/allfood' element={<AllFood></AllFood>}></Route>
        <Route path='/ourservices' element={<OurServices></OurServices>}></Route>
      </Routes>
      <Footer></Footer>
   </>
  );
}

export default App;
