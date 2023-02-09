const mongoose = require("mongoose")

const releasenoteSchema = new mongoose.Schema({
name:String, 
date:String
})

module.exports = mongoose.model("Releasenote", releasenoteSchema)