const data = require('../models/data.model')

const form_update_post = async (req, res) => {
  const dta = await req.body
  const {
    _data_profile,
    _name,
    _contact,
    _skills,
    _education,
    _work_experience,
} = dta
formData.findOneAndUpdate({
            data_profile : _data_profile,
            postedBy : req.user._id,
        },{
          name : _name,
          contact : _contact,
          skills : _skills,
          education : _education,
          work_experience : _work_experience,
             }).then(()=>{
               res.status(200).send(`${data_profile} has been updated successfully`)
             })
             
}

module.exports = {form_update_post}