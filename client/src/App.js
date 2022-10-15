import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import AddProduct from './components/AddProduct'
import AdminProductsList from './components/AdminProductsList'
import HeaderAdmin from './components/HeaderAdmin'
import Login from './components/Login'
import HeaderCheckout from './components/HeaderCheckout'
import HeaderReg from './components/HeaderReg'
import EditProduct from './components/EditProduct'


function App() {

  const user = 'User'

  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header />} />
        <Route path={'/login'} element={<HeaderReg />} />
        <Route path={'/products'} element={<Header />} />
        <Route path={'/checkout'} element={<HeaderCheckout user={user} /> } />
        <Route path={'/admin'} element={<HeaderAdmin user={user} /> } />
        <Route path={'/locations'} element={<Header /> } />
        <Route path={'/about'} element={<Header /> } />
        <Route path={'/contact'} element={<Header /> } />
      </Routes>
      <main>
        <Routes>
          <Route path={'/'} element={<LandingPage/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/checkout'} element={null}></Route>
          <Route path={'/admin'} element={<AdminProductsList/>}></Route>
          <Route path={'/admin/create'} element={<AddProduct />}></Route>
          <Route path={'/admin/edit/:id'} element={<EditProduct />}></Route>
          <Route path={'/create'} element={null}></Route>
          <Route path={'/products'} element={null}></Route>
          <Route path={'/locations'} element={null}></Route>
          <Route path={'/about'} element={null}></Route>
          <Route path={'/contact'} element={null}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
