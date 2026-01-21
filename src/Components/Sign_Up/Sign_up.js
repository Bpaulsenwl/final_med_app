import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Sign_Up.css";

const Sign_Up = () => {

    const [formData, setFormData] = useState({
        role: "",
        name: "",
        phone: "",
        email: "",
        password: "",
      });

    const [errors, setErrors] = useState({});
    const [showErr, setShowErr] = useState("");

    const validate = () => {
        const newErrors = {};
    
        if (!formData.role.trim()) newErrors.role = "Role is required.";

        if (!formData.name.trim()) newErrors.name = "Name is required.";
    
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        else if (!/^[0-9]{0,10}$/.test(formData.phone))
          newErrors.phone = "Phone number must be maximum 10 digits.";
    
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
          newErrors.email = "Enter a valid email address.";
    
        if (!formData.password.trim()) newErrors.password = "Password is required.";
        else if (formData.password.length < 6)
          newErrors.password = "Password must be at least 6 characters.";
    
        return newErrors;
      };

    const register = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;
    };      

    return (
        <div className="container">
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{'text-align': 'left'}}>
                    Already a member? <span><Link to="/login" style={{color: '#2190FF'}}> Login</Link></span>
                </div>
                <div className="signup-form">
                    <form  onSubmit={register}>

                        <div className="form-group">
                            <label for="name">Role</label>
                            <select name="role" className="form-control">
                                <option value="" disabled selected>Please select a role</option>
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                            {errors.role && <p className="error">{errors.role}</p>}
                        </div>


                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;