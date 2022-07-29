const express = require('express');

const { createServer } = require("http");


const app = express();

const httpServer = createServer(app);

const port = 5000;

const orderRouter = require('./routers/orderRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const cors = require('cors');

//to allow react frontend to access the backend
app.use(cors({origin: 'http://localhost:3000'}));

//to parse json data
app.use(express.json());

//middlewares - to intercept(divert) the request
app.use('/user', userRouter);

app.get('/home', (req,res) => { 
    res.send('Hello Express!');
 })


httpServer.listen(port, () => {
    console.log('Server has started');
});             