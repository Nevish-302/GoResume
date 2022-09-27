const {userData} = require('../models/userdata.model')
const {data} = require('../models/data.model')

const form_fill = (req, res)=>{
    console.log(`Working`);
}

const form_submit = async (req, res) => {
    const dta = await req.body
    console.log(dta)
    const {
    _data_profile,
    _name,
    _contact,
    _skills,
    _hobbies,
    _education,
    _work_experience,
    _lang,
    } = dta
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
    const today = new Date();
    const id = await req.user.user_id
    const {username} = await User.findOne({_id: id})
    const userData_ = new userData({
        data_profile : _data_profile,
        username : username,
        date : {
            day : today.getDate(),
            month : today.getMonth(),
            year : today.getMonth(),
            time : today.getTime(),
        }
    })
    userData_
    .save().then((item) => {
         console.log(`Data information has been saved successfully`)
    }).catch(err => {
         console.log(`unable to save the data info`, err);
        
    })

    data_.save().then((item) => {
        console.log(`Data has been saved successfully`)
    }).catch(err => {
       console.log(`unable to save the data`, err);
        
    })
}

module.exports = {form_fill, form_submit}