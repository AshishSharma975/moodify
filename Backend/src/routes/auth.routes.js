const {Router, Router} = require("express")
const authController = require("../controllers/auth.controllers")
const Router = Router();



Router.post('/register',authController.registerUser)

module.exports = Router

