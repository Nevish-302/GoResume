const userData = require('../models/userdata.model')
const User = require('../models/user.model');
const data = require('../models/data.model');

const form_submit =  async (req, res) => {
    const dta = await req.body
    const {
        _data_profile,
        _name,
        _contact,
        _skills,
    _education,
    _work_experience,
    } = dta
    console.log("Data" + dta)
    const data_ = new data({
        data_profile : _data_profile,
        name : _name,
        contact : _contact,
        skills : _skills,
        education : _education,
        work_experience : _work_experience,
        postedBy:req.user._id
    })
    const today = new Date();
    const id = await req.user.user_id
    const {Username} = await User.findOne({_id: id})
    console.log(id, Username)
    const userData_ = new userData({
        data_profile : _data_profile,
        data_profile_id : data_.id,
        username : Username,
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

module.exports = {form_submit}