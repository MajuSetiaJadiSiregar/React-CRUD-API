import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigasi from './components/Navigasi';

const App = () => {
   return(
      <Router>
         <Navigasi/>
      </Router>
   );
};
export default App;