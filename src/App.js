import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import Login from './pages/Login'
import Home from './pages/Home'
import Three from './pages/Three';
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Navbar from './pages/navbar';
import React,{ useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import './pages/navbar.css';
import './styles.css'
//import './App.css'

import SideMenu from './pages/SideMenu';
function App() {
  const [Side, setSide] = useState(false);
  return (
    <div className="">
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
          <Navbar/>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/three">
            <Three />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          </div>
        </Switch>
        
      </BrowserRouter>
    </div>
  )
}

export default App