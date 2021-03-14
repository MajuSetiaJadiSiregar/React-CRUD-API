require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const URIDB = process.env.URIDB;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/dosen', require('./router/DosenRouter'));
app.use('/api/catatan', require('./router/CatatanRouter'));

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log(`database connect`))
.catch(err => console.log(err));

app.listen(PORT, () =>  { console.log(`server run di port ${PORT}`)});
