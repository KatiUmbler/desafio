var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h2>Meu nome &eacute; Katiane Pereira Maciel.</h2><p>Minha comida favorita &eacute pizza.');
}).listen(3000);
