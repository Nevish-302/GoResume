const formData = require('../models/data.model')

const form_update_post = async (req, res) => {
        const {
        _data_profile,
        _name,
        _contact,
        _skills,
        _hobbies,
        _education,
        _work_experience,
        _lang,
        } = await req.body
        formData.findOneAndUpdate({
            data_profile : _data_profile,
            username : req.sessions.user,
        },{
            data_profile : _data_profile,
            name : _name,
            contact : _contact,
            skills : _skills,
            hobbies : _hobbies,
            education : _education,
            work_experience : _work_experience,
            lang : _lang,
             }).then(()=>{
               res.status(200).send(`${data_profile} has been updated successfully`)
             })
    
}

module.exports = {form_update_post}