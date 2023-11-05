import { useState } from "react";
import { valiLation } from "../configs/js/valilation";
import { Link, useNavigate } from "react-router-dom";
import "./Singup.scss";
const Login = () => {
    const [Values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showpassword, setshowPassword] = useState(false);
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    }
    const handleSupmit = (event) => {
        event.preventDefault();
        setError(valiLation(Values));
    }
    // log in
    const handleLogint = () => {
        navigate("/");
    }
    return (
        <>
            <div className="Singup d-flex justify-content-center align-items-center vh-100">
                <div className="bg-whites p-3 rounded">
                    <h2 className="text-center">Log in</h2>
                    <form action="" onSubmit={handleSupmit}>
                        <div className="mb-3">
                            <label htmlFor="email"><strong>Email</strong> </label>
                            <input className="form-control rounded"
                                type="email" name="email" onChange={handleInput} />
                            {error.email && <small className="text-danger ">{error.email}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong> Password</strong></label>
                            <input className="form-control rounded"
                                type={showpassword === false ? "password" : "text"} name="password" onChange={handleInput} />

                            <i className={showpassword === false ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                onClick={() => setshowPassword(!showpassword)} ></i>

                            {error.password && <small className="text-danger ">{error.password}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3 rounded"
                            onClick={() => handleLogint()}>Log in</button>
                    </form>
                    <div className="text-center mt-3">
                        <span >Great User <Link to="/Singup" >Sign up</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;