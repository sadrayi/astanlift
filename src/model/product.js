

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment-fix');

autoIncrement.initialize(global.db);
var saleitem=new mongoose.Schema({
    id:  {type: String},
    sherkatid:  {type: String},
    sherkatname:  {type: String},
    cost:  {type: String},
    quantity:  {type: Number},
});
var productScheme = new mongoose.Schema({
    productname: {type: String},
    saleinfo:[saleitem],
    catname: {type: String},
    catid: {type: String},
    product_pic: {type: String},
    productdetail: {type: String},
    status: {type: String},
    created: {type: Date, default: Date.now},
});
productScheme.plugin(autoIncrement.plugin, 'product');
saleitem.plugin(autoIncrement.plugin, 'saleitem');
module.exports = db.model('product', productScheme);
