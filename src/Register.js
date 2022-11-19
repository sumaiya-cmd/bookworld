import React from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './Register.css'
import { createadmin,loginadmin } from "./Store/Actions/adminAction";

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch () ;

    const loginhandler =() =>{
        navigate('/login')
    }

    const submithandler = (e) =>{
        e.preventDefault() ;

        const data ={
            id:uuidv4(),
            name:e.target.name.value ,
            password:e.target.password.value
        }

        console.log(data);
        dispatch(createadmin(data));
        dispatch(loginadmin(data))
        navigate('/dashboard')
    }

    return (
        
        <div className='register'>
            
        <div className="left">
        </div>
        <div className="right">
            
                <h1>Welcome to my animal world</h1>
            
            <div className="rform">
            <form onSubmit={submithandler} className='container'>
                 <h2>Register now</h2> <br />
                <div class="form-group">
                    <label for="exampleInputEmail1">Username </label>
                    <input name='name' type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter username"/>
                        
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name='password' type="password" class="form-control"  placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-warning btn-lg btn-block">Submit</button> <br /> <br />
                <small onClick={loginhandler}>already have an account ?</small>
            </form>
            </div>
            
            </div>
        </div>
    )
}

export default Register