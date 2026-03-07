const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerUser(req,res) {
    const {email, username,password} = req.body;

    
}


module.exports ={registerUser}