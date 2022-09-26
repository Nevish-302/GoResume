
const {data} = require('../models/data.model')
const {PythonShell} = require('python-shell')
var {spawn} = require("child_process");
const { version } = require('os');

const design = async (req, res) => {
    // const {res_name} = await req.body
    // const {contact, name} = await data.findOne({`data_profile : res_name`})
    const process = await spawn('python3',['./cover_letters/template_4.py']);

    let result = '';

    process.stdout.on('data', data => {
        result += data.toString();
    } );

    process.on('close', code => {
        console.log('Hi', result);
    })
    //    const options = {
      //      mode: 'text',
        //    pythonPath: 'python',
          //  pythonOptions: ['-u'], // get print results in real-time
            //scriptPath: 'path/to/my/scripts',
            //args: ['value1', 'value2', 'value3']
         // };
    //  PythonShell.run('./cover_letters/design1.py', options,function (err, results) {
    //  if (err) 
    //    throw err;
    //  // Results is an array consisting of messages collected during execution
    //  console.log('results: %j', results);
    //});   
    console.log('Good')    
    //PythonShell.run('design1`.py', options, function (err) {
      //  if (err) throw err;
        //console.log('finished');
     // });
}
module.exports = design





// 
// new TableCell({
//     children : [
//         new Table({
//             rows : [
//                 {
//                     children : [
//                     new TableRow({
//                         children : [
//                             new TableCell({
//                                 children : [new Paragraph(`{contact.number}`)]
//                             })
//                         ]
//                     }),
//                     new TableRow({
//                         children : [
//                             new TableCell({
//                                 children : [new Paragraph(`{contact.address}`)]
//                             })
//                         ]
//                     }),
//                     new TableRow({
//                         children : [
//                             new TableCell({
//                                 children : [new Paragraph(`{contact.email}`)]
//                             })
//                         ]
//                     }),
//                 ]
//                 },]
//                                 })                
//                 ]
// })



