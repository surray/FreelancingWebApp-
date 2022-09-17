
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import Projects from './components/projects';
import Feeds from './components/feeds';
import { BrowserRouter as Router,Route } from "react-router-dom";


function App() {

  
  
  return (
    <div className="App">
        <Router>
          <Route  exact path="/">
            <Signup/>
          </Route>

          <Route  path="/login">
             <Login/>
          </Route>
          
          <Route  path="/feeds">
           <Feeds/>
          </Route>
          
          <Route  path="/projects">
           <Projects/>
          </Route>
        </Router>
      
    </div>
  );
}

export default App;
