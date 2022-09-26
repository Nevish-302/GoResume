const userData = require('../models/userdata.model')
const User = require('../models/user.model')
const session = require('express-session')
const dashboard = (req, res) => {
    const username = req.user._id
    console.log(username)

    const userdata = User.findOne({_id: username})
    userData.find({_id: username}).then((err, data) => {
        if (err)  {
            console.log(err);
            res.status(400).json({msg : err})
        }
        console.log(err);
        console.log("Hello")
        res.status(200).json(data);    
    })

}

module.exports = {dashboard}