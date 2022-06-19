const mongoose = require("mongoose")

//define schema
const sprocketsSchema = new mongoose.Schema({
    teeth:{
        type: Number,
        required: [true, "Number of teeth is required"],
    },
    pitch_diameter:{
        type: Number,
        required: [true, "Number of pitch_diameter is required"],
    },
    outside_diameter:{
        type: Number,
        required: [true, "Number of outside_diameter is required"],
    },
    pitch:{
        type: Number,
        required: [true, "Number of outside_diameter is required"],
    }
},{timestamps:true})

module.exports = mongoose.model("Sprocket",sprocketsSchema)


