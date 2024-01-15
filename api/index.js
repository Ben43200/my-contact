const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
console.log(app)

// const port = process.env.PORT || 3000;

// // Listen on `port` and 0.0.0.0
// app.listen(port, "0.0.0.0", function () {
//   // ...
// });

// const io = require('socket.io')(server);

// io.on('connection', client => {
//   client.on('reply', () => { console.log("a reply detected!")}); // listen to the event
// });

// server.listen(PORT, ()=>{
//   console.log("Application running successfully on port: "+PORT);
// });






app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

// Ancien listen

// app.listen(8080, () => {
//     console.log('server listening on port 8080')
// })


//Nouveau listen fix railway

app.listen(8080, "0.0.0.0",() => {
    console.log('server listening on port 8080')
})
