import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'

import AddProduct from './components/AddProduct';
import AdminProductsList from './components/AdminProductsList';
import HeaderAdmin from './components/HeaderAdmin'
import Login from './components/Login'
import Nav from './components/Nav'
import HeaderCheckout from './components/HeaderCheckout'
import Register from './components/Register';


function App() {

  const projectName = 'Yola'
  const user = 'User'

  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header heading={projectName} />} />
        <Route path={'/login'} element={<Header heading={projectName} />} />
        <Route path={'/products'} element={<Header heading={projectName} />} />
        <Route path={'/checkout'} element={<HeaderCheckout heading={projectName} user={user} /> } />
        <Route path={'/admin'} element={<HeaderAdmin user={user} /> } />
        <Route path={'/locations'} element={<Header heading={projectName} /> } />
        <Route path={'/about'} element={<Header heading={projectName} /> } />
        <Route path={'/contact'} element={<Header heading={projectName} /> } />
      </Routes>
      <main>
        <Routes>
          <Route path={'/'} element={null}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
          <Route path={'/checkout'} element={null}></Route>
          <Route path={'/admin'} element={<AdminProductsList/>}></Route>
          <Route path={'/admin/create'} element={<AddProduct />}></Route>
          <Route path={'/admin/edit/:id'} element={null}></Route>
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
