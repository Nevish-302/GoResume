const userData = require('../models/userdata.model')
const User = require('../models/user.model')
const session = require('express-session')
const dashboard = (req, res) => {
    const username = req.session.user
    if(session.isauth){
    const userdata = User.findOne({Username: username})
    userData.find({Username: username}).then((err, data) => {
        if (err)  {
            console.log(err);
            res.status(400).json({msg : err})
        }
        console.log(err);
        res.status(200).json({Data : data, userData : userdata});    
    })
}
else{
    res.status(200).send('HomePage')
}
}

module.exports = {dashboard}