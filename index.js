const express = require('express');
const app = express();
var session = require('express-session');
const http = require('http').createServer(app);
const url = require('url');
var io = require('socket.io');
const mongo = require("mongodb");


app.use(express.static(__dirname + '/public'));
app.use("/public", express.static('./public/'));




app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/html/chat.html');
});

// app.get('/addgroup', function(request, response){
//     var usr=request.query.group_name;

//     console.log(usr);
//     response.send("strriung");
// });


http.listen(80, () => {
	console.log('listening on *:80');
}); 
