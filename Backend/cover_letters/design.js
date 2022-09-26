
const {data} = require('../models/data.model')
const {PythonShell} = require('python-shell')
var {spawn} = require("child_process");
const { version } = require('os');

const design = async (req, res) => {
     const {res_name} = await req.body
     const {contact, name} = await data.findOne({data_profile : res_name})

    const process = await spawn('python3',['./cover_letters/template_4.py', contact, name]);

    let result = '';

    process.stdout.on('data', data => {
        result += data.toString();
    } );

    process.on('close', code => {
        console.log('Hi', result);
    })
    console.log('Good')    
    
}
module.exports = design

