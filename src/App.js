
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginSup/login';
import Home from './pages/home/home';
import SignUp from './pages/loginSup/signup';
import Privacy from './pages/loginSup/privacy';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Privacy' element={<Privacy />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
