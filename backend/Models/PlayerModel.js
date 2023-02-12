let mongoose = require('mongoose');

//Player Schema
const PlayerSchema = mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    commonName : {type : String, required : true},
    age : {type : Number, required : true , min:5 },
    speed : {type : Number, required : true , min:0},
    agility : {type : Number, required : true, min:0},
    skills : {type : Number, required : true,min:0},
    position : {type : String, required : true},
    imageOfplayer : {type : String, required : true},
    overAll : Number,
})

module.exports=mongoose.model("Player",PlayerSchema);