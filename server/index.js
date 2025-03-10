//mongodb+srv://shashidharpatgar8:<db_password>@cluster0.7bzl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')  //import express
const connectDB = require('./db.js') //import db.js to index.js
const itemModel = require('./models/item.js') //import model in this
const cors = require('cors')

const app = express() // use express
app.use(express.json())
app.use(cors())

connectDB()  //calling connectDB

//api creation
app.get('/', async (req, res) => {
    const response = await itemModel.find()   //fect all the recordsin db
    return res.json({items: response})
})

app.listen(3000, () => {
    console.log("app is running");
})