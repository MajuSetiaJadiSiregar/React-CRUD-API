import React from 'react';
import {Link} from 'react-router-dom';

const Navigasi = () => {
   return(
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
         <div className="container">
            <Link className='navbar-brand'>Case-CRUD</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
               <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                     <Link to='/' className='nav-link active'>Catatan</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/catatan' className='nav-link '>Create Catatan</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/dosen' className='nav-link'>Create Dosen</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};
export default Navigasi;