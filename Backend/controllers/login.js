const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const login_p = (req, res) => {
    
    const {username, password} = req.body
        console.log(username, password)
        User.findOne({Username: username}).then((id)=>
        {
        if(!id)
            res.status(400).json({ msg: "User not found" })
            console.log(id)
        bcrypt.compare(password, id.passHash, (err, data) => {
            if(err) console.log(err);
            if (data) {
                req.session.isauth = true
                req.session.user = username
                console.log(req.session)
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