import React,{useState, useEffect} from 'react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
/**EcmaScript => 6 dan 7, spread operator */
const CreateCatatan = () => {
   /**desctructur array */
   const [inputan, setInputan] = useState({title : '', noted : '', dosen : '', date : new Date()});
   const [dosen, setDosen] = useState([]);
   const [dosenSelected, setDosenSelected] = useState('');

   const handleOnChange = e => {
      const { name, value } = e.target;
      setInputan({...inputan, [name] : value});
   };
   
   const handleOnChangeDate = date => {
      setInputan({date});
   };

   const handleOnSubmit = async e => {
      e.preventDefault();
      await axios.post('http://localhost:5050/api/catatan', inputan);
   };


   useEffect(() => {
      const readDosen = async () => {
         await axios.get('http://localhost:5050/api/dosen')
         .then((res) => {
            //console.log(res.data.map((listDosen) => {return listDosen.name}))
            if(res.data.length > 0) {
               setDosen(res.data.map(listDosen => listDosen.name));
               setDosenSelected(res.data[0].name);
            };
         }).catch(err => console.log(err));
      };
      readDosen();
   },[]);
   
   return(
      <div className="col-md-6 offset-md-3 mt-3">
         <div className="card card-body">
            <h3>Catatan</h3>
            <form onSubmit={handleOnSubmit}>
               <div className="form-group">
                  <select className='form-control' name='dosen' defaultValue={dosenSelected} onChange={handleOnChange} required>
                     {
                        dosen.map(listDosen => (
                           <option key={listDosen} value={listDosen}>{listDosen}</option>
                        ))
                     }
                  </select>
               </div>
               <div className="form-group">
                  <label className="form-label">Title</label>
                  <input type="text" className='form-control' name='title' required onChange={handleOnChange} value={inputan.title}/>
               </div>
               <div className="form-group">
                  <label className="form-label">Noted</label>
                  <textarea type='text' className='form-control' name='noted' onChange={handleOnChange} value={inputan.noted} required></textarea>
               </div>
               <div className="form-group">
                  <DataPicker className='form-control' value={inputan.date} selected={inputan.date} onChange={handleOnChangeDate}/>
               </div>
               <div>
                  <button className='btn btn-primary'>Create Catatan</button>
               </div>
            </form>
         </div>
      </div>
   );
};
export default CreateCatatan;