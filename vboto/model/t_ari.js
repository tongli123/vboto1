var mongoose = require('mongoose');

var AriSchema = new mongoose.Schema({
    title: String,
    imageid: Object,
    content: String,
    publishtime: Date,
    type: Boolean,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    staue: Boolean,
    isdel:Boolean
});
module.exports = mongoose.model('ari', AriSchema,'t_ari');