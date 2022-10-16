import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import AddProduct from './components/AddProduct'
import AdminProductsList from './components/AdminProductsList'
import HeaderAdmin from './components/HeaderAdmin'
import Login from './components/Login'

// import Nav from './components/Nav'
import HeaderCheckout from './components/HeaderCheckout'
import HeaderReg from './components/HeaderReg'
import EditProduct from './components/EditProduct'
import Contact from './components/Contact'
import Checkout from './components/Checkout'
import Products from './components/Products'
import Locations from './components/Locations'
import About from './components/About'


function App() {

  const [user, setUser] = useState('')

  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header user={user}/>} />
        <Route path={'/login'} element={<HeaderReg />} />
        <Route path={'/products'} element={<Header user={user}/>} />
        <Route path={'/checkout'} element={<HeaderCheckout user={user} /> } />
        <Route path={'/admin'} element={<HeaderAdmin user={user} setUser={setUser} /> } />
        <Route path={'/admin/create'} element={<HeaderAdmin user={user} setUser={setUser} />}></Route>
        <Route path={'/locations'} element={<Header user={user}/> } />
        <Route path={'/about'} element={<Header user={user}/> } />
        <Route path={'/contact'} element={<Header user={user}/> } />
      </Routes>
      <main>
        <Routes>
          <Route path={'/'} element={<LandingPage/>}></Route>
          <Route path={'/login'} element={<Login user={user} setUser={setUser} />}></Route>
          <Route path={'/checkout'} element={<Checkout />}></Route>
          <Route path={'/admin'} element={<AdminProductsList/>}></Route>
          <Route path={'/admin/create'} element={<AddProduct />}></Route>
          <Route path={'/admin/edit/:id'} element={<EditProduct />}></Route>
          <Route path={'/create'} element={null}></Route>
          <Route path={'/products'} element={<Products />}></Route>
          <Route path={'/locations'} element={<Locations />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
