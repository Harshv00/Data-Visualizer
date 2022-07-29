const { Schema, model } = require('../connection');

const myschema = new Schema({
   product : String,
   quantity : Number,
   total : Number,
   createdat : Date,
});

module.exports = model('User', myschema);