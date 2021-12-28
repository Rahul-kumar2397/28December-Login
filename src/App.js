
import './App.css';
import Setpass from './componenet/Setpass.js';
import Login from './componenet/Login';
import Register from './componenet/Register';
import Log from './componenet/Log.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
  
    <Router>      
      <Switch>
    <Route exact path="/" component={Login}/>
    
    <Route path="/Setpassword"component={Setpass}/> 
    <Route exact path="/register" component={Register}/>
    <Route exact path="/log"component={Log}  />
    {/* <Route path="" component={Login}/> */}
    </Switch>
    </Router>
   </>
  );
}

export default App;


