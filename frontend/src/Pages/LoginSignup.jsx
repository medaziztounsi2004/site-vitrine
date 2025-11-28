import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

    const [state,setState]=useState("Login");
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    });
    const [showPassword, setShowPassword] = useState(false);

    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const login = async () => {
        console.log("Login function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data);

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    } 

    const signup = async () => {
        console.log("sign up function executed",formData);  
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data);

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    } 

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state === "Login" ? "Welcome Back" : "Create Account"}</h1>
                <p className="loginsignup-subtitle">
                    {state === "Login" 
                        ? "Sign in to continue shopping" 
                        : "Join SAGE & STONE today"}
                </p>
                <div className="loginsignup-fields">
                    {state==="Sign Up" && (
                        <div className="input-group">
                            <label>Full Name</label>
                            <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter your name'/>
                        </div>
                    )}
                    <div className="input-group">
                        <label>Email</label>
                        <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter your email'/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-field">
                            <input name='password' value={formData.password} onChange={changeHandler} type={showPassword ? "text" : "password"} placeholder='Enter your password' />
                            <button type="button" className="eye-btn" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                        <line x1="1" y1="1" x2="23" y2="23"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <button className="loginsignup-btn" onClick={()=>{state==="Login"?login():signup()}}>
                    {state === "Login" ? "Sign In" : "Create Account"}
                </button>
                <p className='loginsignup-switch'>
                    {state==="Sign Up"
                        ? <>Already have an account? <span onClick={()=>{setState("Login")}}>Sign In</span></>
                        : <>Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Create One</span></>
                    }
                </p>
                
                <div className="loginsignup-agree">
                    <input type="checkbox" id="agree"/>
                    <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
