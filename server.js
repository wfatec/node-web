var http = require('http');
var url = require("url");

function start(){
    function onRequest(request,response){
        
        var pathname = url.parse(request.url).pathname;
        console.log('request '+ pathname +' been received!');
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World!");
        response.end();
    }
    http.createServer(onRequest).listen(3000);
    console.log("Server has been started on 3000")
}

exports.start = start;