import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { About } from './components/About';
import { Main } from './components/Main';
// import LazyDemo from './components/LazyDemo';
import { Suspense, lazy, useState } from 'react';
import ErrorBoundaryPage from './components/ErrorBoundaryPage';

const LazyDemo = lazy(() => import('./components/LazyDemo'));

function App() {
  

  let [login,setLogin] = useState(false);

  return (
    <div>
      <Header login={login} setLogin={setLogin}></Header>


      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route> */}
        <Route path='/' element={<Main login={login} setLogin={setLogin}></Main>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About login={login} setLogin={setLogin}></About>}></Route>
          <Route path='/contact' element={<Contact login={login} setLogin={setLogin}></Contact>}></Route>
          <Route path='/login' element={<Login login={login} setLogin={setLogin}></Login>}></Route>
          <Route path='lazy' element={<Suspense fallback={<div>Loading.....</div>}><LazyDemo></LazyDemo></Suspense>}></Route>
          <Route path='*' element={<p>Path is not Match</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
