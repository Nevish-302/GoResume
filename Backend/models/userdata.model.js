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
        time : {
            type : Date,
        }
    }
)

const userData = model('userData', userdata)

module.exports = userData   