//server.js
const http = require(http);
const fs = require(fs);
const server = http.createServer(req, res) 
    if(req.url==='/')
        readfile.fs('index.html','utf8',(err, data));
    if (err) {
res.writeHead(500, {'Content-Type': 'text/plain'});
res.end('Internal server ERROR');
    }
else
res.writeHead(500, {'Content-Type': 'text/plain'});
});
const PORT = 3000;
server.listen(PORT, () 
console.log(`Server running at http://localhost:${PORT}/`);
});