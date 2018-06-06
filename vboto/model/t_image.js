var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    name: String,
    path: String,
    type: Boolean,
    sort: Boolean,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    staue: Boolean,
    isdel:Boolean
});
module.exports = mongoose.model('image', ImageSchema,'t_image');