import { useState,useRef } from "react";
import "../styles/login.css";
import {axiosInstance} from "../config";

export default function Login(){

    const[success,setSuccess]=useState(false);
    const[error,setError]=useState(false);
    const nameRef=useRef();
    const passwordRef=useRef();
    const myStorage=window.localStorage;
    const [currentUser,setCurrentUser]=useState(myStorage.getItem("user"));
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const user={
            username:nameRef.current.value,
            password:passwordRef.current.value,
        };
        try{
            const res =await axiosInstance.post("/api/signup/login",user);
            myStorage.setItem("user",res.data.username)
            setCurrentUser(res.data.username)
            setSuccess(true);
            setError(false);
            window.location.href = '/feeds';
            
        }catch(err){

            setError(true);
            setSuccess(false);
        }

    }
    return(
        <div className="loginContainer">
            <div>
                Registered Sucessfully, login now!
            </div>
            <form onSubmit={handleSubmit}>
                <div className="loginContainer">
                    <input type="text" placeholder="username" ref={nameRef}/>
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="login">Login</button>
                    {success &&
                    <span className="success"> Login Sucessful!</span>}
                    {error &&
                    <span className="error"> Login failed!</span>}
                </div>
            </form>
        </div>
    )
}