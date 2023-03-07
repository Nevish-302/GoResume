const mongoose = require('mongoose');
const {Schema}  = mongoose;
const {ObjectId}= mongoose.Schema.Types

const Formschema= new Schema({

    data_profile:
    {   required : true,
        trim : true,
        type: String,
    },
    name : {
        full_name : {type : String},
        job_title : {type : String},
        about : {type : String},
        profile_pic : {type: Buffer}
    }, 
    contact : {
        phone : {type : Number},
        email : {type : String},
        address : {type: String},
        linkden : {type : String}
    },
    skills : {
        type : Array,
        members : {type : String},
    },
    education : 
        {
            type:Array,
            members:{
                year : {type : String},
                degree : {type : String},
                college : {type : String}
            }
        } 
    ,
    work_experience : 
    {
        type:Array,
        members:{
            year : {type : Number}  ,
            duration : {type : Number} ,
            job_title : {type : String},
            company_name : {type : String}
        }
    },
    postedBy:{
        type:ObjectId,
        ref:"Register"
    }
})

const data = mongoose.model('data', Formschema);

module.exports = data;