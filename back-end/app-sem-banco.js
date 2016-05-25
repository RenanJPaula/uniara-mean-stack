'use strict';

var bodyParser = require('body-parser')
  , cors = require('cors')
  , express = require('express')
  , app = express()
  , cesta = [
      { nome: 'Banana' },
      { nome: 'Mamão' }
    ];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/cestadecompras', function(req, res) {
  res.status(200).json(cesta);
});

app.post('/cestadecompras', function(req, res) {
  cesta.push(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Express server listening on port ' + 3000);
});
