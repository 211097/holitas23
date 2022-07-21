import './styleSheets/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Recover from './components/Recover';
import Register from './components/Register';
import Shop from './components/Shop';
import Password from './components/Password'
import Passwordd from './components/Passwordd';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Navigate replace to={"login"} />} />
          <Route path='/recover' element={<Recover />} />
          <Route path='/password' element={<Passwordd />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
