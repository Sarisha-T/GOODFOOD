import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap'

import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Footer from '../src/components/Footer';


function App() {
  return (
    
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
       
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
  
  
    </div>
  );
}

export default App;
