import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const [errors, setErrors] = useState({});
    const [showErr, setShowErr] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
          newErrors.email = "Enter a valid email address.";
    
        if (!formData.password.trim()) newErrors.password = "Password is required.";
        else if (formData.password.length < 6)
          newErrors.password = "Password must be at least 6 characters.";
    
        return newErrors;
      };

    const login = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;
    };      

    return (
<div className="container">
    <div className="login-grid">
        <div className="login-text">
            <h1>Login</h1>
        </div>
        <div className="login-text">
            Are you a new member? <span><Link to="/signup"> Sign Up Here</Link></span>
        </div>
        <br />
        <div className="login-form">
            <form onSubmit={login}>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId"/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                    <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                </div>
                <div className="login-text last">
                    Forgot Password?
                </div>
            </form>
        </div>
    </div>
</div>
    );
}

export default Login;