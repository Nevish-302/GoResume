const data = require('../models/data.model')
const userData = require('../models/userdata.model')
const jwt = require('jsonwebtoken')

const get_data = async (req, res) => {
    const {user_id, user_name} = await jwt.verify(req.cookies.auth, process.env.TOKEN_KEY);
    console.log('cookies', username, user_id);
    const {dataProfile} = await req.body
    const {data_profile_id} = await userData.findOne({username: user_name, data_profile : dataProfile})
    const resume_data = await data.findOne({_id : data_profile_id});
    console.log(resume_data)
    res.status(200).json(resume_data)
}

const getDataById = async (req, res) => {
    const {profile_id} = await req.body
    const resume_data = await data.findOne({_id : profile_id});
    console.log(resume_data)
    res.status(200).json(resume_data)
}

module.exports = {get_data, getDataById}