const modelDosen = require('../models/Dosen');

const dosenControllers = {
   readDosen : async (req,res) => {
      try {
         const dosen = await modelDosen.find();
         res.json(dosen);
      } catch (error) {
         res.status(400).json({ error : error});
      };
   },

   createDosen : async (req, res) => {
      try {
         const { name } = req.body;
         const newDosen = new modelDosen({name});
         await newDosen.save();
         res.json(newDosen);
      } catch (error) {
         res.status(400).json({ error : error});
      };
   },

   deleteDosen : async (req, res) => {
      const { id } = req.params;
      await modelDosen.findByIdAndDelete(id);
      res.json('User Deleted');
   }
};

module.exports = dosenControllers;