import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigasi from './components/Navigasi';
import CreateDosen from './components/CreateDosen';

const App = () => {
   return(
      <Router>
         <Navigasi/>
         <div className="container">
            <Switch>
               <Route path='/dosen' component={CreateDosen}/>
            </Switch>
         </div>
      </Router>
   );
};
export default App;