import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import Login from './pages/Login'
import Home from './pages/Home'
import Three from './pages/Three';
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import './styles.css'
import './App.css'
function App() {
  return (
    <div className="">
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={Login} />
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App