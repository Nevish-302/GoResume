const {Schema, model} = require('mongoose')

const Data = new Schema(
    {
        data_profile : {
            type: String,
            unique: true,},
        name : {
            full_name : {type : String},
            job_title : {type : String},
            about : {type : String},
            type: String, 
            required: true,
        }, 
        contact : {
            number : {type : Number},
            email : {type : String},
            address : {type: String},
            linkedin : {type : String}
        },
        skills : {
            type : Array,
            members : {type : String},
        },
        hobbies : {
            type : Array,
            members : [{type : String}],
        },
        education : {
            type: Array,
            members : [
            {year : {type : String},},
            {degree : {type : String},},
            {college : {type : String}}
        ]
        }   
        ,
        work_experience : {
            type: Array,
            members :[
            {year : {type : Number},},
            {duration : {type : Number},},
            {job_title : {type : String},},
            {company_name : {type : String}}]
        },
        lang : {
            type : Array,
        }
    }
)
const data = model('data', Data)
module.exports = {data}