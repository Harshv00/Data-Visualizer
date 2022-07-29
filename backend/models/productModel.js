const { Schema, model } = require('../connection');

const myschema = new Schema({
    title : String,
    category : String,
    quantity : Number,
    price : Number,
    createdat : Date, 
});

module.exports = model('product', myschema);