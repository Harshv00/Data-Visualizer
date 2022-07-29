const express = require('express');

const { createServer} = require("http");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {origin: 'http://localhost:3000'}});

//on function is used to recieve event
io.on("connection", (socket) => {
  console.log("a user connected");
    socket.on('sendmsg', (data) => {
        console.log(data);
        data.sent = false;
        socket.broadcast.emit('recvmsg', data);
    })
});

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
app.use('/product', productRouter);
app.use('/order', orderRouter);

app.get('/home', (req,res) => { 
    res.send('Hello Express!');
 })


httpServer.listen(port, () => {
    console.log('Server has started');
});             