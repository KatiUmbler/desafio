var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h2>Meu nome &eacute; Katiane Pereira Maciel.</h2><p>Minha comida favorita &eacute pizza.');
});
                                
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
