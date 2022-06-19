const mongoose = require("mongoose")

//define schema
const factorySchema = new mongoose.Schema({
    sprocket_production_actual:{
        type: Array,
        required: [true, "sprocket_production_actual is required"],  
    },
    sprocket_production_goal:{
        type:Array,
        required:[true, "sprocket_production_goal is required"]
    },
    time:{
        type:Array,
        required:[true, "time is required"]
    }
},{timestamps:true})

module.exports = mongoose.model("Factory", factorySchema )