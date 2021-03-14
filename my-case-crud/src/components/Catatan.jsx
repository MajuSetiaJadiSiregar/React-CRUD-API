import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';

const Catatan = () => {
   const [listCatatan, setListCatatan] = useState([]);


   const readCatatan = async () => {
      await axios.get('http://localhost:5050/api/catatan')
      .then(res => {setListCatatan(res.data)}).catch((err) => console.log(err));
   };

   const deleteCatatan = async catatanId => {
      await axios.delete('http://localhost:5050/api/catatan/' + catatanId);
      readCatatan();
   };

   useEffect(() => {
      readCatatan()
   },[]);

   
   return(
      <div className="row mt-3">
         {
            listCatatan.map(list => (
               <div className="col-md-4" key={list._id}>
                  <div className="card">
                     <div className="card-header d-flex justify-content-between">
                        <Link to={`/update/${list._id}`} className='btn btn-warning'>Update</Link>
                     </div>
                     <div className="card-body">
                        <h3>title : {list.title}</h3>
                        <p>Dosen : {list.dosen}</p>
                        <p>Catatan : {list.noted}</p>
                        <p>Date : {format(list.date)}</p>
                     </div>
                     <div className="card-footer">
                        <button className='btn btn-danger' onClick={() => deleteCatatan(list._id)}>Delete</button>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
   );
};
export default Catatan;