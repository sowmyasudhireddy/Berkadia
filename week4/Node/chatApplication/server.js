let express = require('express');
let app = express();
var cors = require('cors');
var path = require('path');

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/chatapp')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/chatapp/index.html'));
});

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('new-message', (message) => {
    io.emit('new-message', message);
    console.log(message);

  });

  socket.on('typing', (msg) => {
    console.log(msg);
    io.emit('typing', { 'isTyping': msg.isTyping, 'username': msg.username });
  });

});
server.listen(port, () => {
  console.log(`started on port: ${port}`);
});