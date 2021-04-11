import React,{useState, useEffect} from 'react';
import axios from 'axios';

const CreateDosen = () => {
   const [inputanName, setInputanName] = useState('');
   const [dataDosen, setDataDosen] = useState([]);

   const handleOnChange = e => {
      setInputanName(e.target.value);
   };

   const readDataDosen = async () => {
      await axios.get('http://localhost:5050/api/dosen')
      .then((res) => {
         setDataDosen(res.data);
      }).catch((err) => console.log(err));
   };
   
   const handleOnSubmit = async e => {
      e.preventDefault();
      await axios.post('http://localhost:5050/api/dosen', { name : inputanName});
      setInputanName('');
      readDataDosen();
   };

   const deleteDosen = async dosenId => {
      try {
         const responseUser = window.confirm('Yakin mau Hapus ... ?');
         if(responseUser) {
            await axios.delete('http://localhost:5050/api/dosen/' + dosenId);
            readDataDosen();
         };
      } catch (error) {
         console.log(error)  
      }
   };

   useEffect(() => {
      readDataDosen();
   },[]);

   return(
      <div className="row mt-3">
         <div className="col-md-4">
            <div className="card card-body">
               <h3>Create a New Dosen</h3>
               <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                     <label className="form-label">Nama Dosen</label>
                     <input type="text" name='name' className='form-control' value={inputanName} onChange={handleOnChange}/>
                  </div>
                  <button type='submit' className='btn btn-primary'>Add Dosen</button>
               </form>
            </div>
         </div>
         <div className="col-md-8">
            <h2>List Dosen</h2>
            <ul className='list-group'>
               {
                  dataDosen.map((listDosen) => {
                     return <li key={listDosen._id} className='list-group-item list-group-item-action' >{listDosen.name} <button onDoubleClick={() => deleteDosen(listDosen._id)} className='btn btn-danger'>Delete</button></li>
                  })
               }
            </ul>
         </div>
      </div>
   );
};
export default CreateDosen;