const userData = require('../models/userdata.model')
const User = require('../models/user.model')
const session = require('express-session')
const dashboard = async (req, res) => {
    const id = await req.user.user_id
    console.log("request", req.user,"id",id)

    
     
    const user = User.findOne({_id: id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, id, "hi")
        res.status(200).json(data);    
    })

    const userdetails = userData.findOne({Username: user.username}).then((data)=>{
        console.log("userdata",data)
    })
}

module.exports = {dashboard}