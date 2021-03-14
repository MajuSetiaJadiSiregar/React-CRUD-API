import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigasi from './components/Navigasi';
import CreateDosen from './components/CreateDosen';
import CreateCatatan from './components/CreateCatatan';
import Catatan from './components/Catatan';

const App = () => {
   return(
      <Router>
         <Navigasi/>
         <div className="container">
            <Switch>
               <Route exact path='/' component={Catatan} />
               <Route path='/dosen' component={CreateDosen}/>
               <Route path='/update/:id' component={CreateCatatan}/>
               <Route path='/catatan' component={CreateCatatan}/>
            </Switch>
         </div>
      </Router>
   );
};
export default App;