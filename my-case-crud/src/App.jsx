import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigasi from './components/Navigasi';
import CreateDosen from './components/CreateDosen';
import CreateCatatan from './components/CreateCatatan';

const App = () => {
   return(
      <Router>
         <Navigasi/>
         <div className="container">
            <Switch>
               <Route path='/dosen' component={CreateDosen}/>
               <Route path='/catatan' component={CreateCatatan}/>
            </Switch>
         </div>
      </Router>
   );
};
export default App;