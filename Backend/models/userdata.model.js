const {Schema, model} = require('mongoose') 

const userdata = new Schema(
    {
        username : {
            type : String,
            required : true,
            trim : true,
        },
        data_profile : {
            type: String,   
            required : true,         
            trim : true,
        },
    }
)

const userData = model('userData', userdata)

module.exports = {userData}