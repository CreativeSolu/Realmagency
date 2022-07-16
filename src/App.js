import './App.css';
import About from './Components/about';
import Work from './Components/work';
import JobsWelcome from './Components/Careers/jobsWelcome';
import JobDetail from './Components/Careers/jobDetails';
import Application from './Components/Careers/application';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App(){
   return(
    <>
     <Work />
     <div style={{backgroundImage:`url("img/Screen\ Shot\ 2022-04-21\ at\ 22.2242\ 1.png")`}}>
        <About />
     </div>
     <div style={{backgroundImage:`url("img/Screen\ Shot\ 2022-04-20\ at\ 21.32\ 8.png")`}}>
     <JobsWelcome />
     <JobDetail />
     <Application />
     </div>
     </>
   )
}

export default App;