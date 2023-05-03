const http = require('http');

function createServer() {
    const server = http.createServer((req, res) =>{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!');
        res.end();
    });

    server.listen(3000) ;
    console.log('Port 3000 listened on sever');
}

createServer();
