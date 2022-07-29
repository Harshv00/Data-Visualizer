const { Schema, model } = require('../connection');

const myschema = new Schema({
    title : String,
    category : String,
    quantity : Number,
    price : Number,
    createdAt : Date, 
});

module.exports = model('Product', myschema);