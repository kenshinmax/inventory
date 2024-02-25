const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema =  new Schema(
  {
    name: {
        type: String,
        required: true
    }, 
    id: {
        type: String,
        required: true
    }
  }

)
module.exports = mongoose.model('product', productSchema);