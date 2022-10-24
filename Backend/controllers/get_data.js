const data = require('../models/data.model')
const userData = require('../models/userdata.model')

const get_data = async (req, res) => {
    const {_username,_data_profile} = await req.body
    const profile_check = userData.findOne({username : _username, data_profile : _data_profile})
    if (profile_check == undefined)
    {
        res.send("Resume not found");
    }
    const resume_data = data.findOne({data_profile : _data_profile});
    res.status(200).json({resume_data})
}

module.exports = {get_data}