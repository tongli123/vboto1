var mongoose = require('mongoose');

var AriSchema = new mongoose.Schema({
    title: String,
    imageid: Object,
    content: String,
    publishtime: Date,
    type: Number,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    staue: Number,
    isdel:Number
});
module.exports = mongoose.model('ari', AriSchema,'t_ari');