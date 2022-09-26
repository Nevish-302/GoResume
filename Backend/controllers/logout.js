const express = require('express')

const logout = (req, res) => {
    
    res.clearCookie("auth");
    console.log(req.session)           
    res.status(200).send('Home');
}

module.exports = {logout}