import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const projectName = 'Yola'
  const user = 'User'

  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header  heading={projectName} />}></Route>
        <Route path={'/login'} element={<Header  heading={projectName} />}></Route>
        <Route path={'/products'} element={<Header heading={projectName}  />}></Route>
        <Route path={'/checkout'} element={<Header heading={projectName}  />}></Route>
        <Route path={'/admin'} element={<Header heading={`Welcome, ${user}`}  />}></Route>
      </Routes>
      <main>
        <Routes>
          <Route path={'/'} element={null}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
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
