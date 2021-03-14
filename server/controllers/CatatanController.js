const modelCatatan = require('../models/Catatan');

const catatanController = {
   readCatatan : async (req, res) => {
      try {
         const catatan = await modelCatatan.find();
         res.json(catatan);
      } catch (error) {
         res.status(400).json({ error : error});
      };
   },

   readDetailCatatan : async (req, res) => {
      try {
         const catatan = await modelCatatan.findById(req.params.id);
          res.json(catatan);
      } catch (error) {
         res.status(400).json({ error : error});
      };
   },

   createCatatan : async (req, res) => {
      try {
         const { title, dosen, noted, date } = req.body;
         const newCatatan = new modelCatatan({title, dosen,noted,date});
         await newCatatan.save();
         res.json('Create Catatan');
      } catch (error) {
         res.status(400).json({ error : error});
      }
   },
   updateCatatan : async (req, res) => {
      try {
         const { title, dosen, noted, date } = req.body;
         await modelCatatan.findByIdAndUpdate(req.params.id,{title, dosen, noted, date});
         res.json('Catatan Update');
      } catch (error) {
         res.status(400).json({ error : error});
      }
   },
   deleteCatatan : async (req, res) => {
      try {
         
         await modelCatatan.findByIdAndDelete(req.params.id);
         res.json('Catatan Deleted');
      } catch (error) {
         res.status(400).json({ error : error});
      }
   }
};
module.exports = catatanController;