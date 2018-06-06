var mongoose = require('mongoose');

var PrivileageSchema = new mongoose.Schema({
    account: String,
    code: Boolean,
    parentid: Number,
    type: Number,
    staue: Boolean,
    isdel: Boolean
});
module.exports = mongoose.model('privileage', PrivileageSchema,'t_privileage');