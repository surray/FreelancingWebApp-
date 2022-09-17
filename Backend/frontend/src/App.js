
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import Projects from './components/projects';
import Feeds from './components/feeds';
import Myprojects from './components/myprojects';
import { BrowserRouter as Router,Route } from "react-router-dom";
import {useState,useEffect} from 'react';
import {axiosInstance} from "./config";
import Navbar from './components/navbar';

function App() {

  
  const [projects,setProjects]=useState([{}]);
  const [accept,setAccept]=useState([{}]);
  

  useEffect(()=>{
    const getProjects =async ()=>{
      try{
        var res =await axiosInstance.get("/api/project/");
        setProjects(res.data);
        console.log(res.data);
        } catch(err){
         console.log(err);
        }
     };
    getProjects()
   },[]);
  

  const addProject = (acceptProj) => {
    setAccept(JSON.stringify(acceptProj))
    console.log(acceptProj);
    console.log(typeof(acceptProj));

     }
   


  return (
    <div className="App">
       <Navbar/>
        <Router>
          <Route  exact path="/">
            <Signup/>
          </Route>

          <Route  path="/login">
             <Login/>
          </Route>
          
          <Route  path="/projects">
           <Projects/>
          </Route>

          <Route  path="/feeds">
          <Feeds props={projects} childToParent={addProject}/>
          </Route>
          
          <Route  path="/myprojects">
            <Myprojects props2={accept}/>
          </Route>
        </Router>
      
    </div>
  );
}

export default App;
