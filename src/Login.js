import React from 'react';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginadmin } from "./Store/Actions/adminAction";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { admindetails } = useSelector(state => state.admin)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submithandler = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            password: e.target.password.value
        }

        var isMatch = admindetails.some(function (e) {
            return e.name === data.name && e.password === data.password;
        });
        console.log(isMatch);

        if (isMatch) {
            dispatch(loginadmin(data))
            navigate('/dashboard');
        }
    }

    return (
        <div className='login'>

            <div className="lleft">
            </div>
            <div className="lright">

                <h1>Welcome to my animal world</h1>
                <div className="lform">
                    <form onSubmit={submithandler} className='container'>
                        <h2>Login here</h2>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username </label>
                            <input name='name' type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username" />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input name='password' type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-warning btn-lg">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login