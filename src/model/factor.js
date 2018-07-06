

var mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment-fix');

autoIncrement.initialize(global.db);
var factoritemSchema=new mongoose.Schema({
    id:  {type: String},
    comment:  {type: String},
    percost:  {type: String},
    title:  {type: String},
    quantity:  {type: String},
});
var factorSchema = new mongoose.Schema({
    phone:  {type: String},
    requester:  {type: String},
    requestid:  {type: String},
    requestkind: {type: String},
    arzeshafzude:  {type: String},
    factorsum:  {type: String},
    factorcount:  {type: String},
    factordate:  {type: Date, default: Date.now},
    factormaliat:  {type: String},
    items:[factoritemSchema],
    status:{type:String},
    walletid:{type:String},
    created: {type: Date, default: Date.now},
});
factorSchema.plugin(autoIncrement.plugin, 'factor');
factoritemSchema.plugin(autoIncrement.plugin, 'factoritem');
module.exports = db.model('factor', factorSchema);
