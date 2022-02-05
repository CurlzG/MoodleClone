import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import About from './About'
import Products from './Products'
import ProductDetails from './ProductDetails'
import { FaAlignJustify } from "react-icons/fa";
import Button from '@mui/material/Button';
import './sideMenu.css';
import { RiAccountCircleFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
function SideMenu({dis}) {
  return (
      <BrowserRouter> 
          <div className='Background'>
          <Link className='SubPageSM' to="/"><RiAccountCircleFill/> Account</Link>
         
          <Link className='SubPageSM' to="/about"><MdAssignment/> Assignments</Link>
          <Link className='SubPageSM' to="/products"><IoSettingsSharp/>Settings</Link>
          <Link className='SubPageSM' to="/products"><FiLogOut/>Logout</Link>
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
  )
}

export default SideMenu