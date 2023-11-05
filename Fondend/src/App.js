import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './compoments/Home';
import Login from './compoments/Login';
import Singup from './compoments/Singup';
import Cutting from './compoments/Cutting';
import { Sevices } from './compoments/Sevices';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Singup' element={<Singup />} />
        <Route path='/cutting' element={<Cutting />} />
        <Route path='/sev' element={<Sevices />} />
      </Routes>
    </div>
  );
}

export default App;
