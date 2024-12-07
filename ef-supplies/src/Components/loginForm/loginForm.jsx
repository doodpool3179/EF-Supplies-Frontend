import React from "react";
import './loginForm.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className= "input-box">
                    <input type="text"
                    placeholder='Username' required></input>
                </div>                
                <div className= "input-box">
                    <input type="password"
                    placeholder='Password' required></input>
                </div>
                <div className= "remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;