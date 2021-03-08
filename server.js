let http= require("http")
let fs = require('fs')
let port = 4020;

let host = 'localhost';
let server = http.createServer()
server.on('request',(request, response)=>{
    fs.readFile('index.html',(err, data)=>{
        if(err) console.log("Cette page n'existe pas")
        response.statusCode = 200
        response.setHeader('Content-type','text/html;charset=utf-8')
        response.end(data)
        console.log("serveur OK")
    })
})
server.listen(port, host,()=>{
    console.log(`Le serveur run sur le port ${host}:${port} `)
})