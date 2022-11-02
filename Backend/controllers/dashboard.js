const userData = require('../models/userdata.model')
const User = require('../models/user.model')
const dashboard = async (req, res) => {
    const id = await req.user.user_id
    console.log("request", req.user,"id",id)

    
     
    const user = await User.findOne({_id: id}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        //console.log("Hello")
        console.log(data, id, "hi")
        res.status(200).json(data);    
    })
    
    userData.find({Username: user.Username}).then((data)=>{
        res.send({Data : data, userinfo : {username : user.Username, email : user.Email}})
    })
}

module.exports = {dashboard}