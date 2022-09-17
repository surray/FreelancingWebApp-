import { useEffect, useState,useRef } from "react";
import "../styles/projects.css";
import axios from "axios";
import Feeds from "./feeds";



export default function Projects(){
   
    const pnameRef=useRef();
    const pdescRef=useRef();
    const pskillRef=useRef();
    const ppayRef=useRef();
    const pbudRef=useRef();
    const [projects,setProjects]=useState([{}]);

    useEffect(()=>{
        const getProjects =async ()=>{
          try{
            var res =await axios.get("http://localhost:5000/api/project/");
            setProjects(res.data);
            console.log(res.data);
            } catch(err){
             console.log(err);
            }
         };
        getProjects()
       },[]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newProject={
            projectName:pnameRef.current.value,
            projectDesc:pdescRef.current.value,
            projectSkills:pskillRef.current.value,
            projectPay:ppayRef.current.value,
            projectBud:pbudRef.current.value,

        };
        try{
            await axios.post("http://localhost:5000/api/project/",newProject);
            window.location.href = '/feeds';
            
            
        }catch(err){

           console.log(err);

        }

    }
    return(
        <div className="projectContainer">
            
            <form onSubmit={handleSubmit}>
                <div className="projectContainer">
                    <label>Project title</label>
                    <input type="text" placeholder="projectName" ref={pnameRef}/>

                    <label>Project Description</label>
                    <input type="text" placeholder="projectDesc" ref={pdescRef}/>

                    <label>Project Skills</label>
                    <input type="text" placeholder="projectSkills" ref={pskillRef}/>

                    <label>Project Payment method</label>
                    <input type="text" placeholder="projectPay" ref={ppayRef}/>

                    <label>Project Budget</label>
                    <input type="text" placeholder="projectBud" ref={pbudRef}/>
                    
                    <button className="addproject">Add Project</button>
                </div>
            </form>
            <div>
            <Feeds props={projects}/>
            </div>
        </div>
    )
}