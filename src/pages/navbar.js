import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import About from './About'
import Products from './Products'
import ProductDetails from './ProductDetails'
import { FaAlignJustify } from "react-icons/fa";
import Button from '@mui/material/Button';
import SideMenu from './SideMenu';
import './navbar.css';
import React,{ useState } from 'react';
function Navbar() {
  const [Side, setSide] = useState(false);
  return (
      <div>
      <BrowserRouter> 
          <div className='TitleAlign'>
    <FaAlignJustify size={75} className='Iconstyle' onClick={() =>{setSide(!Side)}}/>
         <h1 className='Title'> <Link to={"/home"} className='LinkTitleHome' >Moodle Clone </Link></h1> 
          <Link className='SubPage' to="/">Home</Link>
          <Link className='SubPage' to="/about">About</Link>
          <Link className='SubPage' to="/products">Products</Link>
          <Link className='SubPage' to="/products">Logout</Link>
          </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
      { Side ? <SideMenu/> : null  }
      </div>
  )
}

export default Navbar