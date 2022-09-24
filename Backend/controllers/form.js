const {userData} = require('../models/userdata.model')
const {data} = require('../models/data.model')

const form_fill = (req, res)=>{
    console.log(`Working`);
}

const form_submit = async (req, res) => {
    const {
    _data_profile,
    _name,
    _contact,
    _skills,
    _hobbies,
    _education,
    _work_experience,
    _lang,
    } = await req.body
    const data_ = new data({
        data_profile : _data_profile,
        name : _name,
        contact : _contact,
        skills : _skills,
        hobbies : _hobbies,
        education : _education,
        work_experience : _work_experience,
        lang : _lang,
    })
    const userData_ = new userData({
        data_name : _data_name,
    })
    userData_
    .save().then((item) => {
         console.log(`Data information has been saved successfully`)
    }).catch(err => {
         console.log(`unable to save the data info`, err);
        
    })

    data_.save().then((item) => {
        console.log("Hello");
        console.log(`Data has been saved successfully`)
    }).catch(err => {
       console.log(`unable to save the data`);
        
    })
}

module.exports = {form_fill, form_submit}