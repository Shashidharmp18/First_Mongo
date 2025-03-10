const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({  //creating a schema

    name: String,
    description: String  

})

// creating modal

const itemModel = mongoose.model("Item", itemSchema)

module.exports = itemModel