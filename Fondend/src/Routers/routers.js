import { Routes, Route } from "react-router-dom";
import Home from '../compoments/Home';
import Login from '../compoments/Login';
import Singup from '../compoments/Singup';
import Cutting from '../compoments/Cutting';
import { Sevices } from '../compoments/Sevices';
import Booking from '../compoments/Booking';
import TableUser from '../compoments/tableUser';
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Singup' element={<Singup />} />
                <Route path='/cutting' element={<Cutting />} />
                <Route path='/sev' element={<Sevices />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/tableUser' element={<TableUser />} />
            </Routes>
        </>
    )
}