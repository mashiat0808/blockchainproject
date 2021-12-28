var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    to: {type: String, required: true},
    from: {type: String, required: true},
    date: {type: Date, required: true},
    amount: {type: Number, required: true},
    signature: {type: String, required: true}
  }
);


var productPost = mongoose.model('productPost', productSchema);
module.exports = productPost;

