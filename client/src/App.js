import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header />}></Route>
        <Route path={'/products'} element={<Header />}></Route>
        <Route path={'/checkout'} element={<Header />}></Route>
        <Route path={'/admin'} element={<Header />}></Route>
      </Routes>
      <main>
        <Routes>
          <Route path={'/'} element={null}></Route>
          <Route path={'/login'} element={null}></Route>
          <Route path={'/register/consumer'} element={null}></Route>
          <Route path={'/checkout'} element={null}></Route>
          <Route path={'/admin'} element={null}></Route>
          <Route path={'/admin/create'} element={null}></Route>
          <Route path={'/admin/edit/:id'} element={null}></Route>
          <Route path={'/create'} element={null}></Route>
          <Route path={'/products'} element={null}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
