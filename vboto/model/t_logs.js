var mongoose = require('mongoose');

var LogsSchema = new mongoose.Schema({
    adduser :String,
    content: String,
    addtime: Date,
    ip: String
});
module.exports = mongoose.model('logs', LogsSchema,'t_logs');