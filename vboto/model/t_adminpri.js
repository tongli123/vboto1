var mongoose = require('mongoose');

var AdminpriSchema = new mongoose.Schema({
    adminid :Object,
    priid: Object
});
module.exports = mongoose.model('adminpri', AdminpriSchema,'t_adminpri');