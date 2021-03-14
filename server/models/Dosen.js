const mongoose = require('mongoose');

const dosenSchema = mongoose.Schema({
   name : {type : String, require : true}
},{timestamps: true});

module.exports = mongoose.model('Dosen', dosenSchema);