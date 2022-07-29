const { default: mongoose } = require("mongoose");

const url = "mongodb+srv://harsh:harsh@cluster0.t83qhgz.mongodb.net/mernmttf330?retryWrites=true&w=majority"

// Promise  
mongoose.connect(url)
.then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.error(err);
});


module.exports = mongoose;
