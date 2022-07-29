const { Schema, model } = require('../connection');

const myschema = new Schema({
   product : String,
   quantity : Number,
   total : Number,
   createdAt : Date,
});

module.exports = model('Order', myschema);