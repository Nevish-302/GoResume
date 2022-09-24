const formData = require('../models/data.model')
const form_update_get = (req, res) => {
    formData.findOne({Username: username}).then((err, data) => {
        if (err)  {
            console.log(err);
            res.status(400).json({msg : err})
        }
        res.status(200).json({Data : data});    
    })
}

module.exports = {form_update_get}