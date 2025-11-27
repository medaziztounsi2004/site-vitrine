import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import eyeclose from '../Components/Assets/eyeclose.png';
import eyenotclose from '../Components/Assets/eyenotclose.png';

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
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
                    <div className="password-field">
                        <input name='password' value={formData.password} onChange={changeHandler} type={showPassword ? "text" : "password"} placeholder='Password' />
                        <img src={showPassword ? eyenotclose : eyeclose} alt="Toggle Password Visibility" className="eye" onClick={togglePasswordVisibility} />
                    </div>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"
                    ?<p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}><p className='p'>Login here</p></span></p>
                    :<p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}><p className='p'>Click here</p></span></p>}
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
