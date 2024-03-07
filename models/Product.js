const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema =new Schema({
    title : {
        type:String,
        unique: true,
        require : true
    },
    description: {
        type:String,
        require : true
    },
    price: {
        type:String,
        require : true
    },
    image: {
        type:String,
    },
    size: { type: String },
    color: { type: String},
    category: { type: Array}
}, { timestamps: true })

const productModel = mongoose.model('Product', productSchema)
module.exports = productModel