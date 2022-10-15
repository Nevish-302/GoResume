const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {ObjectId}= mongoose.Schema.Types

const Formschema= new mongoose.Schema({
    _data_profile:"",
    _name : {
        full_name : {type : String},
        job_title : {type : String},
        about : {type : String},

    }, 
    _contact : {
        phone : {type : Number},
        email : {type : String},
        address : {type: String},
        linkden : {type : String}
    },
    _skills : {
        type : Array,
        members : {type : String},
    },
    _education : 
        {
            type:Array,
            members:{
                year : {type : String},
                degree : {type : String},
                college : {type : String}
            }
        } 
    ,
    _work_experience : 
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

const Form = new mongoose.model("Form",Formschema);

module.exports = Form;