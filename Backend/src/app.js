const express = require("express")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/database")

const app = express()

app.use(express.json())
app.use(cookieParser())

connectDB()

module.exports = app