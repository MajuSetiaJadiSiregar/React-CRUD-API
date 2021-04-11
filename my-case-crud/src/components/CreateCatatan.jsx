import React,{useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const CreateCatatan = (props) => {

   const [inputan, setInputan] = useState({title : '', noted : '', dosen : '', date : new Date()});
   const [dosen, setDosen] = useState([]);
   const [dosenSelected, setDosenSelected] = useState('');
   const [update, setUpdate] = useState(false);
   const [id, setId] = useState('');

   const handleOnChange = e => {
      const { name, value } = e.target;
      setInputan({...inputan, [name] : value});
   };
   
   const handleOnChangeDate = date => {
      setInputan({date});
   };

   const handleOnSubmit = async e => {
      e.preventDefault();
      if(update){
         await axios.put('http://localhost:5050/api/catatan/' + id, inputan);
      } else {
         await axios.post('http://localhost:5050/api/catatan', inputan);
      }
      window.location.href ='/'
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
         if(props.match.params.id){
            console.log(props.match.params.id);
            await axios.get('http://localhost:5050/api/catatan/' + props.match.params.id)
            .then((res) => {
               console.log(res);
               setInputan({title : res.data.title, noted : res.data.noted, dosen : res.data.dosen, date : new Date()});
               setUpdate(true);
               setId(res.data._id);
            });
         } else {
            console.log('test')
         }
      };
      readDosen();
   },[]);
   
   return(
      <div className="col-md-6 offset-md-3 mt-3">
         <div className="card card-body">
            <h3>Catatan</h3>
            <form onSubmit={handleOnSubmit}>
               <div className="form-group">
                  <select className='form-control' name='dosen' value={inputan.dosen} onChange={handleOnChange} required>
                     {
                        dosen.map(listDosen => (
                           <option key={listDosen}  value={listDosen} onChange={handleOnChange}>{listDosen}</option>
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
                  <DatePicker className='form-control'  selected={inputan.date} onChange={handleOnChangeDate}/>
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