var express = require('express');
var app = express();
app.get('/index.html', function (require, res) {
    res.send('Hello i m express');
})
var server = app.listen(8080, function ()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log("hi express invoked");

});