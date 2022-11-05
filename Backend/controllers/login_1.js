const express = require('express')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const login_p = (req, res) => {
    
    const {username, password} = req.body
        console.log(username, password)
        const user = User.findOne({Username: username}).then((id)=>
        {
        if(!id)
            res.status(400).json({ msg: "User not found" })
            console.log(id)
        bcrypt.compare(password, id.passHash, (err, data) => {
            if(err) console.log(err);
            if (data) {
                console.log(id)
                const token = jwt.sign(
                    { user_id: id._id },
                    'process.env.TOKEN_KEY',
                    {
                      expiresIn: "2h",
                    }
                  );
                  res.cookie("auth", token, { expire: new Date() + 9999 });
                  res.status(200).json(id);
                console.log({ msg: "Login success" }, req.session);
            } else {
                return res.status(401).json({ msg: "Invalid credentials" })
            }
        })
    })
  
    
}


const login_g = (req, res) => {                
    res.status(200).send('Home');
}

module.exports = {login_p, login_g}