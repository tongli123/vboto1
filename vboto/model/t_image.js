var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    name: String,
    path: String,
    type: Number,
    sort: Number,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    statue:Number,
    isdel:Number
},{versionKey: false});
module.exports = mongoose.model('image', ImageSchema,'t_image');