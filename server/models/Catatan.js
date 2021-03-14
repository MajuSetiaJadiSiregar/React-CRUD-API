const mongoose = require('mongoose');

const catatanSchema = mongoose.Schema({
   title : String,
   noted : { type : String, require : true},
   dosen : { type : String},
   date : Date,
}, {timestamps: true});

module.exports = mongoose.model('Catatan', catatanSchema);