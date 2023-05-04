//The required Node Modules

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
require('dotenv').config()

app = express()

//To parse the form data

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());     
app.use(cors({credentials : true, origin: 'https://goresume-ten.vercel.app', }))
//app.use(cors({credentials : true, origin: 'http://localhost:3000', }))

app.use(cookieParser())

//Mongodb URI

//const uri = `mongodb://127.0.0.1:27017/test`;
mongoose.connect(process.env.URI, {usenewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`);
})

//The routes
const cover = require(`./routes/cover`)
const auth = require(`./routes/userauth`)
const form  = require('./routes/datamanip')
const home = require('./routes/home')
const update = require('./routes/formupdate')
const download = require('./routes/download')

//The routing of requests

app.use('/home', home)
app.use('/userauth', auth)
app.use('/form', form)
app.use('/update', update)
app.use('/download', download)
app.use(`/cover`, cover)

app.listen(5000, () => {
  console.log(`The server is listening on the port 5000`);
});
