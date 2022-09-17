import { useState,useRef } from "react";
import "../styles/signup.css";
import {axiosInstance} from "../config";

export default function Signup(props){

    const[success,setSuccess]=useState(false);
    const[error,setError]=useState(false);
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newUser={
            username:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };
        try{
            await axiosInstance.post("/api/signup/register",newUser);
            setError(false);
            setSuccess(true);
            window.location.href = '/login';
            
        }catch(err){

            setError(true);
            setSuccess(false);

        }



    }
    return(
        <div className="registerContainer">
            <div>
                Freelance!
            </div>
            <form onSubmit={handleSubmit}>
                <div className="registerContainer">
                    <input type="text" placeholder="username" ref={nameRef}/>
                    <input type="email" placeholder="email" ref={emailRef}/>
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="signup">SignUp</button>
                    {success &&
                    <span className="success" > SignUp Sucessful!</span>}
                    {error &&
                    <span className="error"> SignUp failed!</span>}
                    <button className="login" onClick={event =>  window.location.href='/login'}>Login</button>
                                      
                </div>
            </form>
        </div>
    )
}